# Navigation

The Navigation component is used at the top of Rawson Homes DreamBuilder. This component allows  users to access the various sections of the site.




<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description         | Type         | Default                                                                                                                          |
| -------- | --------- | ------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `links`  | --        | Navigation links    | `MenuItem[]` | `[     { uid: 'notes', label: 'Notes', icon: notes },     { uid: 'contact-us', label: 'Contact Us', icon: email }   ]`           |
| `steps`  | --        | Steps in navigation | `MenuItem[]` | `[     { uid: 'home-design', label: 'Home Design', icon: homeDesign },     { uid: 'facade', label: 'Facade', icon: facade }   ]` |


## Events

| Event            | Description                            | Type               |
| ---------------- | -------------------------------------- | ------------------ |
| `onSelectedStep` | Event fires when selected step changes | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
