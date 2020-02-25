import React, { Component } from 'react';
import MainSchemaService from './services/main-schema-service';
import { FormComponent, HeaderComponent } from './components/';
import getComponent from './helpers/getComponent';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const service = new MainSchemaService();

class App extends Component {
  state = {
    loading: true,
    schema: null
  };

  async componentDidMount() {
    const schema = await service.getSchema();
    this.setState({ loading: false, schema });
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <div className="container">
          {this.state.loading || !this.state.schema ? (
            <div>loading...</div>
          ) : (
            <div className="main-content">
              {this.state.schema.components.map((component, index) => {
                return getComponent(component, index);
              })}
              <FormComponent schema={this.state.schema.form} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
