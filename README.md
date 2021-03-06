# AdButtonSlide
[website](https://adessilly.github.io/ad-button-slide/)

Button Slide : show simple icon, on hover : show icon + text

<iframe src="https://stackblitz.com/edit/ad-button-slide?embed=1&file=src/app/app.component.html&hideExplorer=1&hideNavigation=1&view=preview" style="width:100%;height:330px;border:none;"></iframe>

## Using ***ad-button-slide*** in a project

1. Install the library : 
`npm i ad-button-slide`
2. Import the module : 
```
import { AdButtonSlideModule } from 'ad-button-slide';
@NgModule({
imports: [ ..., AdButtonSlideModule ], ...
```
3. (optional) import an icon library like fontawesome (`npm i @fortawesome/fontawesome-free`)
4. Play with the component :-)

```<ad-button-slide icon="fas fa-trash" label="Delete this" background="red"></ad-button-slide>```

## Properties

- `ad-button-slide` - (`AdButtonSlideComponent`) - button slide component object.

Parameters supported by this object:

- `icon`: string; - icon class, eg. 'fa fa-trash'
- `label`: string; - label displayed on hover
- `background`: string = '#aaa'; - css background color
- `foreground`: string = 'white'; - css font color
- `backgroundOver`: string = null; - css background color when mouseOver, if no value given : backgroundOver = background
- `foregroundOver`: string = null; - css font color when mouseOver, if no value given : foregroundOver = foreground
- `mini`: boolean = false; - boolean to make the button tiny

## Example

<iframe src="https://stackblitz.com/edit/ad-button-slide?embed=1&file=src/app/app.component.html&hideNavigation=1&view=preview" style="width:100%;height:400px;border:none;"></iframe>

## Test library

clone this project and run 'npm i && npm start'

## License

MIT License

## Author
Adrien Dessilly
