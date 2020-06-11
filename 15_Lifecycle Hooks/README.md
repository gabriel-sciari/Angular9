# Life cycle hooks at start:
* `constructor`  
* `ngOnChanges` - Respond when Angular (re)sets data-bound input properties.  
* `ngOnInit` - Initialize the component after Angular first displays the data-bound properties and sets the component's input properties.
* `ngDoCheck` - Detect and act upon changes that Angular can't or won't detect on its own.
* `ngAfterContentInit` - Respond after Angular projects external content into the component's view
* `ngAfterContentChecked` - Respond after Angular checks the content projected into the component.
* `ngAfterViewInit` - Respond after Angular initializes the component's views and child views.
* `ngAfterViewChecked` - Respond after Angular checks the component's views and child views. 


# Life cycle hooks whenever the parent changes the data-bound input:
* `ngOnChanges` - Called  and whenever one or more data-bound input properties change - Respond when Angular (re)sets data-bound input properties.
* `ngDoCheck` - Detect and act upon changes that Angular can't or won't detect on its own.
* `ngAfterContentChecked` - Respond after Angular checks the content projected into the component
* `ngAfterViewChecked` - Respond after Angular checks the component's views and child views 

# Life cycle hooks at end:
* `ngOnDestroy` - Cleanup just before Angular destroys the component.