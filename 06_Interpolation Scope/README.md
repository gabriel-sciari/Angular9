# Interpolation scope in angular

### Important rules:
* every value / function that we use in the `html template` in the component, adds by default the prefix of `this` that refers to the ts class of the componenet
* If we want to use a `static class member` in the interpolation, we have to ceate a non-static way to access this static property, via `this` keyword
* If want to use an exusting type in the interpolation, we have to ceate a class-memner that points to this type so we can access this type, via `this` keyword (in tghis example we created a class pointer to an enum)

