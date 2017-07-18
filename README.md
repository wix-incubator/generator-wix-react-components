# generator-wix-react-components


## Installation

First, install [Yeoman](http://yeoman.io) using [npm](https://www.npmjs.com/), clone **generator-wix-react-components** repo and make `npm link` (if you see `Error: EACCES: permission denied` then use `sudo npm link`.

```bash
npm install -g yo
git clone git@github.com:wixplosives/generator-wix-react-components.git
cd generator-wix-react-components
npm link
```



## Usage

Run `yo wix-react-components` in your *components* folder:

```bash
cd <path_to_wix-react-components_repo>/src/components
yo wix-react-components
```



It will ask you to enter a name of a component in **kebab-case**:

```
     _-----_
    |       |    ╭──────────────────────────╮
    |--(o)--|    │ Hey! Give this component │
   `---------´   │     a kamel-case name    │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `
 (components) your-new-component-name 
```

After you enter the name you should see that the next files are created:

```
your-new-component-name/index.ts
your-new-component-name/your-new-component-name.css
your-new-component-name/your-new-component-name.spec.tsx
your-new-component-name/your-new-component-name.tsx
```


$$
Voilà
$$

