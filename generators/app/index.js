const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');

module.exports = class extends Generator {

  prompting() {
    const done = this.async();

    this.prompt([
      {
        type: 'input',
        name: 'name',
        message: yosay(`Hey! Give this component a ${chalk.underline.black.bgRed('kamel-case')} name`),
        default: this.appname
      },
    ]).then(answers => {
      this.props = answers;
      done();
    });
  }

  writing() {
    const componentName = _.flow([_.trim, _.toLower]) (this.props.name); // kebab-case

    const data = {
      names: {
        'componentName': _.camelCase(componentName),
        'ComponentName': _.flow([_.camelCase, _.upperFirst]) (componentName),
        'component-name': componentName,
        'COMPONENT-NAME': _.toUpper(componentName)
      }
    };

    this.fs.copyTpl(
      this.templatePath('index.ts'),
      this.destinationPath(`${data.names['component-name']}/index.ts`), 
      data
    );

    this.fs.copyTpl(
      this.templatePath('new-component.css'),
      this.destinationPath(`${data.names['component-name']}/${data.names['component-name']}.css`), 
      data
    );
    
    this.fs.copyTpl(
      this.templatePath('new-component.spec.tsx'),
      this.destinationPath(`${data.names['component-name']}/${data.names['component-name']}.spec.tsx`), 
      data
    );

    this.fs.copyTpl(
      this.templatePath('new-component.tsx'),
      this.destinationPath(`${data.names['component-name']}/${data.names['component-name']}.tsx`), 
      data
    );
    
    this.log(yosay(`Wow! Done!`));
  }
  
};
