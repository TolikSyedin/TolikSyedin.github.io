import React, { Component } from 'react'
import showdown from 'showdown'
import renderHTML from 'react-render-html'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import Flexbox from 'flexbox-react'

class App extends Component {
  state = {
    selectOptions: [
      'headings',
      'paragraphs',
      'lists'
    ],
    examples: [],
    markdown: '',
    preview: '',
  }

  componentDidMount = () => fetch('/examples').then(res => res.json()).then(examples => this.setState({ examples }))

  handleChange = (e, i, val) => this.setState({
    currentValue: val,
    markdown: this.state.examples.find(item => item.name === val).markdown,
    preview: this.markdownConverter(this.state.examples.find(item => item.name === val).markdown)
  })

  markdownConverter = val => {
    const converter = new showdown.Converter(),
      html = converter.makeHtml(val);
    return html
  }

  textareaHandler = e => this.setState({markdown: e.target.value, preview: this.markdownConverter(e.target.value)})

  render() {
    const {
      selectOptions,
      currentValue,
      markdown,
      preview
    } = this.state
    return (
      <Flexbox justifyContent='center' flexDirection='column' className="App">
        <header>
          <h2>Flight-right markdown test application</h2>
          <SelectField 
            name='markdown-select'
            id='markdown-select'
            value={currentValue}
            onChange={this.handleChange}>
            {selectOptions.map(item => <MenuItem key={item} value={item} primaryText={item}></MenuItem>)}
          </SelectField>
        </header>
        {currentValue && 
          <Flexbox flexDirection='column'>
            <Flexbox justifyContent='space-around'>
              <Flexbox flexDirection='column' padding='1%'>
                <h4>Markdown</h4>
                <TextField
                  multiLine
                  hintText="Markdown field"
                  floatingLabelText="Markdown preview"
                  value={markdown}
                  onChange={this.textareaHandler}/>
              </Flexbox>

              {preview && 
                <Flexbox flexDirection='column' padding='1%'>
                  <h4>Raw preview</h4>
                  <TextField
                    disabled
                    multiLine
                    hintText="Preview field"
                    floatingLabelText="Raw preview"
                    value={this.markdownConverter(preview)}/>
                </Flexbox>  
              }
              </Flexbox>


              <Flexbox justifyContent='center'>
              {preview && 
                <Flexbox flexDirection='column' padding='3%'>
                  <h4>Rendered html</h4>
                  {preview.split(/\n/).map((item,i)=> <Flexbox element='article' key={i}>{renderHTML(item)}</Flexbox>)}
                </Flexbox>
              }
              </Flexbox>
          </Flexbox>
        }
      </Flexbox>
    );
  }
}

export default App;