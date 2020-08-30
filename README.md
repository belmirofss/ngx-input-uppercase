# ngx-input-uppercase

You know that input you need to uppercase it? So, do it extremely simply!


### Install

```

$ npm i ngx-input-uppercase --save

````


### How to use?

##### Import the module into your module:

```javascript
// module.ts
import { NgxInputUppercaseModule } from 'ngx-input-uppercase';

@NgModule({
	imports: [
		NgxInputUppercaseModule
	]
})
export class YourModule { }

````

##### Put in your input:

```html
<input ngxInputUppercase>
```