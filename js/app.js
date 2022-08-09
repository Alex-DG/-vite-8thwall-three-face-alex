import '../styles/app.css'
import * as THREE from 'three'
import { runFacePipeline } from './Experience/FacePipeline'

window.THREE = THREE

// window.onload = () => {
//   window.XR8
//     ? runFacePipeline()
//     : window.addEventListener('xrloaded', runFacePipeline)
// }

window.XR8
  ? runFacePipeline()
  : window.addEventListener('xrloaded', runFacePipeline)
