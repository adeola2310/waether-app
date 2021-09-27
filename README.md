## **Deployment**
This project is deployed using continous deployment with Netlify.
Deployment link is: https://weather-mini.netlify.app/ 

## **Getting Started**
*```Git clone "name of repo"```
*```yarn install```
*```yarn start```

## **Installation**
 ```redux-thunk```
```yarn test```
```node-sass```
```chartjs```
```redux```
```husky-hook```
```prettier```
```material-ui```
```axios```
```prop-types```
`eslint`
`eslint-plugin`

## **Tools/Technologies**
* React
* Redux
* Material ui
* Jest for testing


## **Screenshots**

![myimage-alt-tag](https://res.cloudinary.com/upperli/image/upload/v1632602449/Screenshot_2021-09-24_at_1.19.34_PM_songcp.png) - Loading State

![myimage-alt-tag](https://res.cloudinary.com/upperli/image/upload/v1632602539/screencapture-localhost-3000-2021-09-24-13_16_01_hlqlr5.png) -Desktop view(selected)

![myimage-alt-tag](https://res.cloudinary.com/upperli/image/upload/v1632753007/screencapture-localhost-3001-2021-09-27-15_25_05_x1mbw0.png) - Mobile View


## **Best Practice**
* Added prop-types making the code easy to use and ensuring the type of data in a component is rendered correctly
* Errors were handles well
* Routes was handed properly although this is a one page app
* Comments were added where neccessary
* Codes were linted to analyze and find error in code, prettier for formatting
* Redux for state management to avoid prop drilling in app
* All files related to a single components are in a folder
* Ensure that I make use of code splitting to reduce load time and allow load chunk only when a neccessary component/page is rendered or needed, Using suspense and lazy.
* Avoided NaN for dates in (AM/PM and YYYY/MM/DD) format in safari browser by adding 'T'; parsing from string

## **Features**
* Funtions for Convering dates in AM/PM and yyyy-mm-dd formats were written without using any library
* Material ui was used in styling the weather cards and button and material icons for icons
* User can get tempatures for a given country Munich in this case


## **Proposed Improvement**
* More unit tests can be added
* Mobile device view can also be improved more for users
