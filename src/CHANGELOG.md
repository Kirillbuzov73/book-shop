# 1.0.2 (2021-03-09)


### Features


* Created BookComponent. Used BookComponent in the AppComponent. Described book model with 'BookModel' interface.
* Displayed BookComponent properties in the template. Added button 'Buy' in the BookComponent template. Implimented event handler 'onBuy' that pushed the book into the basket. The 'Buy' button is disabled if the book is unavailable.
* Created CartComponent and used it in the AppComponent template. Created CartItemComponent and used it in the CartComponent template. The CartItemComponent is used to display books and their number in the shopping cart. Implemented functionality to change number of products in the cart and to delete products from the basket.
* Used decorators '@Input()' and '@Output()'.
* Used 'onPush' strategy in the presentational components – BookComponent and CartItemComponent.
* Used component lifecycle hooks.
* Handled DOM events.
* Added element <h1 #appTitle> with template variable. Used @ViewChild decorator. Set the title for the application from the class.

# 1.0.1 (2021-03-03)


### Features


* Added CHANGELOG.md file.