//const Uppy = require(['@uppy/core']);
//const XHRUpload = require('@uppy/xhr-upload');
//const Dashboard = require('@uppy/dashboard');
//const Webcam = require('@uppy/webcam');

//const StatusBar = Uppy.StatusBar
//const Informer = Uppy.Informer
//import Uppy from './@uppy/core'
const Webcam = Uppy.Webcam
const Dashboard = Uppy.Dashboard
const GoogleDrive = Uppy.GoogleDrive
const Dropbox = Uppy.Dropbox
const Instagram = Uppy.Instagram
const Facebook = Uppy.Facebook
const OneDrive = Uppy.OneDrive
const ScreenCapture = Uppy.ScreenCapture
const ImageEditor = Uppy.ImageEditor
const Tus = Uppy.Tus
const DropTarget = Uppy.DropTarget
const GoldenRetriever = Uppy.GoldenRetriever
const XHRUpload = Uppy.XHRUpload


const uppy = new Uppy.Uppy()
           .use(Dashboard, {
            inline: true,
            target: '#drag-drop-area',
            });