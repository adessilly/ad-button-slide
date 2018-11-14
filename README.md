# AdButtonSlideLib

Button Slide : show simple icon, on hover : show icon + text

## Using ***ad-button-slide*** in a project

1. Install the library : 
`npm i ad-button-slide`
2. Import the module : 
```
import { AdButtonSlideModule } from 'ad-button-slide';
@NgModule({
imports: [ ..., AdButtonSlideModule ], ...
```
3. (optional) import a icon lib like font-awesome
4. Play with the component :-)
```
<ad-button-slide icon="fa fa-trash" label="Delete this this" buttonClass="btn-slide-2" background="red"></ad-button-slide>
```

## Properties

- `ad-button-slide` - (`AdButtonSlideComponent`) - button slide component object.

Parameters supported by this object:

- `icon`: string; - icon class, eg. 'fa fa-trash'
- `label`: string; - label displayed on hover
- `background`: string = '#aaa'; - css background color
- `foreground`: string = 'white'; - css font color
- `mini`: boolean = false; - boolean to make the button tiny

## Example

<iframe src="https://stackblitz.com/edit/ad-button-slide?embed=1&file=src/app/app.component.html&hideNavigation=1&view=preview" style="width:100%;height:400px;border:none;"></iframe>

## Test library

clone this project and run 'npm i && npm start'

### License

The MIT License (see the [LICENSE](https://github.com/valor-software/ng2-file-upload/blob/master/LICENSE) file for the full text)

### Author
Adrien Dessilly
