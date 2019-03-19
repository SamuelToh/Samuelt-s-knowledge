# Break on condition

## Introduction

Not essential but a nice to have tool in your swiss knife debugging toolbox.

The most typical use case for debugger tools is you would put a breakpoint and somewhere and then wait for the code to
brake at your breakpoint. However some cases this is not the scenario which you want the brake to be applied on it,
for instance you may want to only look at how the code behaviour when variable `x` and probably also `y` is equal to 
a certain value.

In this case we can either write additional code to force a brake by adding `if x and y = blah` then set the breakpoint inside
the clause. Or you can decorate your breakpoint with `condition` statements to say only stop when condition is fulfilled.

## Solution

In this README we'll take a look at where we can do so in `Webstorm`.

First set a breakpoint using `cltr+f8` and then do `cltr+shift+f8` to bring up the advance menu.

Under the `condition` textbox write your equation to apply the brake only when it is fulfilled.

E.g. `tag === "stop_me"

For decorated breakpoint you'll noticed that there is a little question mark on top of your standard circular red breakpoint.

This may differ in different version of `Webstorm`.

 