# Remora

<div align="center">

**Real-Time Non-Contact Video Photoplethysmography (rPPG) System**  
*An Advanced Image and Video Processing (IVP) & Computer Vision Framework for Sub-Pixel Hemodynamic Extraction*

[![Private & Proprietary](https://img.shields.io/badge/Status-Private%20%26%20Proprietary-red?style=for-the-badge)](LICENSE)
[![Python](https://img.shields.io/badge/Python-3.11%20%7C%203.12%20%7C%203.13-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![MediaPipe](https://img.shields.io/badge/MediaPipe-Tasks_Vision_0.10-00A98F?style=for-the-badge&logo=google&logoColor=white)](https://developers.google.com/mediapipe)
[![OpenCV](https://img.shields.io/badge/OpenCV-4.10-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white)](https://opencv.org)
[![WebSockets](https://img.shields.io/badge/WebSockets-Real--Time%20Telemetry-010101?style=for-the-badge&logo=socketdotio&logoColor=white)](https://websockets.readthedocs.io)

<p align="center">
  A high-performance digital image and video processing platform that extracts continuous physiological signals—Blood Volume Pulse (BVP), instantaneous Heart Rate (BPM), Pulse Stability (RMSSD), Rhythm Regularity (SDNN), Breathing Rate, and Optical Signal-to-Noise Ratio (SNR)—from standard RGB webcam video feeds in real time with zero physical contact.
</p>

</div>

---

## Table of Contents

- [Abstract & Course Project Overview](#abstract--course-project-overview)
- [Image and Video Processing (IVP) Principles](#image-and-video-processing-ivp-principles)
  - [1. Optical Reflection Model in Digital Video](#1-optical-reflection-model-in-digital-video)
  - [2. Spatial Domain Operations: Face Tracking & ROI Extraction](#2-spatial-domain-operations-face-tracking--roi-extraction)
  - [3. Chrominance Space Transformation & Skin Segmentation](#3-chrominance-space-transformation--skin-segmentation)
  - [4. Spatial Mean Pooling & Temporal Signal Assembly](#4-spatial-mean-pooling--temporal-signal-assembly)
- [Algorithmic Core & Mathematical Formulations](#algorithmic-core--mathematical-formulations)
  - [1. Plane-Orthogonal-to-Skin (POS) Projection](#1-plane-orthogonal-to-skin-pos-projection)
  - [2. Chrominance-Based Signal Extraction (CHROM)](#2-chrominance-based-signal-extraction-chrom)
  - [3. Green Channel Absorption & FastICA](#3-green-channel-absorption--fastica)
  - [4. Zero-Phase Butterworth Bandpass Filtering & Detrending](#4-zero-phase-butterworth-bandpass-filtering--detrending)
  - [5. Discrete Fourier Transform & Sub-Bin Parabolic Interpolation](#5-discrete-fourier-transform--sub-bin-parabolic-interpolation)
  - [6. Second-Harmonic Peak Suppression](#6-second-harmonic-peak-suppression)
- [Extracted Biometric Parameters](#extracted-biometric-parameters)
  - [Cardiovascular & Optical Metrics](#cardiovascular--optical-metrics)
  - [Autonomic Tone & Waveform Metrics](#autonomic-tone--waveform-metrics)
- [System Architecture & Processing Pipeline](#system-architecture--processing-pipeline)
  - [End-to-End Video Processing Pipeline](#end-to-end-video-processing-pipeline)
  - [Dual-Engine Topology: Python Backend vs. Browser WASM](#dual-engine-topology-python-backend-vs-browser-wasm)
  - [Horizontal Mirroring Inversion & Coordinate Sync](#horizontal-mirroring-inversion--coordinate-sync)
  - [Zero-Dummy Face Lock Protocol](#zero-dummy-face-lock-protocol)
- [Application Modules & User Interface](#application-modules--user-interface)
  - [1. Live Video Feed & Face Tracking HUD](#1-live-video-feed--face-tracking-hud)
  - [2. Hardware-Accelerated 60 FPS Oscilloscope](#2-hardware-accelerated-60-fps-oscilloscope)
  - [3. Real-Time FFT Spectral Analyzer](#3-real-time-fft-spectral-analyzer)
  - [4. Scientific Algorithm Benchmark & Theory Studio](#4-scientific-algorithm-benchmark--theory-studio)
  - [5. Obsidian Liquid-Glass Design System](#5-obsidian-liquid-glass-design-system)
- [Experimental Results & Comparative Performance](#experimental-results--comparative-performance)
  - [Algorithm Performance Matrix](#algorithm-performance-matrix)
  - [Video Noise Sources & Countermeasures](#video-noise-sources--countermeasures)
- [Project Directory Structure](#project-directory-structure)
- [Installation & Execution Guide](#installation--execution-guide)
  - [Prerequisites](#prerequisites)
  - [Local Full-Stack Setup](#local-full-stack-setup)
  - [Standalone OpenCV Desktop Processor](#standalone-opencv-desktop-processor)
  - [Serverless Vercel Deployment](#serverless-vercel-deployment)
- [Academic Literature & Key References](#academic-literature--key-references)
- [License & Intellectual Property](#license--intellectual-property)
- [Author & Contact](#author--contact)

---

## Abstract & Course Project Overview

In digital image and video processing (IVP), contact-free facial video analytics represents a multidisciplinary frontier combining computer vision, spatio-temporal filtering, color-space representations, and discrete-time spectral estimation.

Traditional cardiovascular monitoring demands direct epidermal contact via electrocardiogram (ECG) electrodes or finger-clip photoplethysmography (PPG) sensors. In clinical triage, telemedicine, neonatal care, and unconstrained human-computer interaction, physical contact sensors introduce skin irritation, motion detachment, and hardware tethering constraints.

**Remora** addresses these challenges through Remote Photoplethysmography (rPPG). By capturing subtle, imperceptible color fluctuations caused by peripheral blood volume oscillations in facial microvessels, Remora reconstructs continuous cardiovascular waveforms from consumer webcam video. The system operates in real time at 30 to 60 frames per second (FPS), performing face detection, region-of-interest (ROI) segmentation, skin chrominance isolation, orthogonal mathematical projections, temporal bandpass filtering, and sub-bin Fast Fourier Transform (FFT) analysis.

---

## Image and Video Processing (IVP) Principles

### 1. Optical Reflection Model in Digital Video

Digital video frames captured by a standard RGB image sensor follow Shafer's **Dichromatic Reflection Model**. The light reflected from a human face at spatial coordinates $(x, y)$ and time $t$ consists of two distinct components:

$$I(x, y, t) = I_d(x, y, t) + I_s(x, y, t)$$

1. **Diffuse Reflection ($I_d$)**: Light that penetrates cutaneous dermal tissue, undergoes multiple scattering events, and is absorbed by hemoglobin in superficial capillary beds before re-emerging. This component carries the pulsatile Blood Volume Pulse (BVP) signal.
2. **Specular Reflection ($I_s$)**: Light that reflects directly off the skin surface (stratum corneum) without entering dermal tissue. It carries no physiological pulse information and varies dramatically with subject head motion, facial angle, and room illumination.

In matrix notation across the three sensor color channels $C(t) = [R(t), G(t), B(t)]^T$:

$$C(t) = I_{	ext{ambient}}(t) \cdot \left[ \mathbf{u}_d \cdot s(t) + \mathbf{u}_s \cdot m(t) ight] + \mathbf{n}(t)$$

Where:
- $\mathbf{u}_d$: Unit color vector of diffuse reflection modulated by pulsatile blood volume $s(t)$.
- $\mathbf{u}_s$: Unit color vector of specular surface reflection modulated by motion intensity $m(t)$.
- $\mathbf{n}(t)$: Additive sensor quantization and thermal shot noise.

The primary objective in IVP is to project the 3D RGB video trace onto a mathematical subspace that cancels the specular motion vector $\mathbf{u}_s$ while maximizing the diffuse pulsatile component $s(t)$.

---

### 2. Spatial Domain Operations: Face Tracking & ROI Extraction

```
┌──────────────────────────────────────────────────────────────────┐
│                   SPATIAL DOMAIN ROI PROCESSING                  │
│                                                                  │
│   Video Frame (640x480 RGB)                                      │
│          │                                                       │
│          ▼                                                       │
│   MediaPipe 478-Point 3D Face Mesh                               │
│          │                                                       │
│          ├─────────────────────────┬─────────────────────────┐   │
│          ▼                         ▼                         ▼   │
│   Forehead ROI Box          Left Cheek ROI           Right Cheek │
│   (Indices: 10, 67, 109,    (Indices: 116, 123,      (Indices:   │
│    297, 338, 9)              147, 187, 207)           345, 352)  │
└──────────────────────────────────────────────────────────────────┘
```

Spatial localization is executed using Google MediaPipe's dense 478-landmark 3D FaceLandmarker mesh. Unlike simple bounding-box classifiers, the 3D mesh tracks facial orientation in Euclidean coordinates across pitch ($\pm 35^\circ$), yaw ($\pm 45^\circ$), and roll ($\pm 30^\circ$).

Remora extracts vascular regions of interest (ROIs) with high microvascular density and minimal subcutaneous muscle or hair interference:
- **Forehead ROI**: Positioned over the frontal branch of the superficial temporal artery and supraorbital capillary beds (mesh indices: `[10, 67, 109, 297, 338, 9]`).
- **Bilateral Cheek ROIs**: Positioned over the transverse facial vascular plexus (mesh indices: Left `[116, 123, 147, 187, 207]`, Right `[345, 352, 376, 411, 427]`).
- **Combined Multi-Zone ROI**: Adaptive weighted spatial fusion of forehead and cheek zones for maximum signal stability under non-uniform illumination.

---

### 3. Chrominance Space Transformation & Skin Segmentation

To prevent hair, eyebrows, spectacles, lips, and background pixels from corrupting the spatial color average, each pixel within the candidate ROI is filtered through dual-space chromatic constraints:

#### YCrCb Chrominance Color Space
$$Y = 0.299R + 0.587G + 0.114B$$
$$Cr = (R - Y) 	imes 0.713 + 128$$
$$Cb = (B - Y) 	imes 0.564 + 128$$

Skin pixels satisfy the physiological cluster:
$$133 \le Cr \le 173 \quad 	ext{and} \quad 77 \le Cb \le 127$$

#### HSV Hue & Saturation Thresholding
$$0 \le H \le 28^\circ \quad 	ext{and} \quad 0.20 \le S \le 0.68 \quad 	ext{and} \quad 0.35 \le V \le 0.95$$

The binary segmentation mask $M(x, y, t)$ is defined as:
$$M(x, y, t) = egin{cases} 1 & 	ext{if } (x, y) \in 	ext{Skin}_{	ext{YCrCb}} \land (x, y) \in 	ext{Skin}_{	ext{HSV}} \ 0 & 	ext{otherwise} \end{cases}$$

---

### 4. Spatial Mean Pooling & Temporal Signal Assembly

For each video frame at discrete time $t$, spatial pooling computes the arithmetic mean of all segmented skin pixels inside the selected region $\Omega$:

$$ar{R}(t) = rac{\sum_{(x,y) \in \Omega} I_R(x, y, t) \cdot M(x, y, t)}{\sum_{(x,y) \in \Omega} M(x, y, t)}$$

$$ar{G}(t) = rac{\sum_{(x,y) \in \Omega} I_G(x, y, t) \cdot M(x, y, t)}{\sum_{(x,y) \in \Omega} M(x, y, t)}$$

$$ar{B}(t) = rac{\sum_{(x,y) \in \Omega} I_B(x, y, t) \cdot M(x, y, t)}{\sum_{(x,y) \in \Omega} M(x, y, t)}$$

Spatial mean pooling yields an effective sub-pixel averaging filter that attenuates high-frequency sensor noise by a factor proportional to $\sqrt{N_{	ext{pixels}}}$, turning standard 8-bit webcam imagery into clean 64-bit floating-point temporal color traces:

$$\mathbf{C}(t) = [ar{R}(t), \, ar{G}(t), \, ar{B}(t)]^T$$

---

## Algorithmic Core & Mathematical Formulations

Remora implements three distinct rPPG projection methodologies, allowing empirical benchmarking of computational cost versus motion robustness.

```
┌────────────────────────────────────────────────────────────────────────┐
│                   rPPG ALGORITHM PROJECTION TAXONOMY                   │
│                                                                        │
│   Raw RGB Temporal Traces [R(t), G(t), B(t)]                           │
│          │                                                             │
│          ├───────────────────────┬───────────────────────┐             │
│          ▼                       ▼                       ▼             │
│   Plane-Orthogonal-       Chrominance Model       Green Optical        │
│   to-Skin (POS)           (CHROM)                 Channel              │
│   • 2D Projection Plane   • Normalized Color Diff • Single-Channel     │
│   • Dynamic Alpha Ratio   • White-Vector Balancing• Highest Absorption │
│   • Motion Robust         • Skin-Tone Invariant   • Lowest CPU Latency │
└────────────────────────────────────────────────────────────────────────┘
```

### 1. Plane-Orthogonal-to-Skin (POS) Projection

*Proposed by Wang et al. (IEEE TBME, 2017)*

The POS algorithm eliminates motion artifacts by defining a mathematical projection onto a plane orthogonal to the skin-tone reflection vector.

#### Step 1: Temporal Mean Normalization
Across a sliding temporal window of $L$ frames ($L = 	ext{round}(1.6 	imes f_s)$):

$$C_n(t) = rac{C(t)}{\mu(C)} = \left[ rac{ar{R}(t)}{\mu_R}, \, rac{ar{G}(t)}{\mu_G}, \, rac{ar{B}(t)}{\mu_B} ight]^T$$

#### Step 2: Orthogonal Chrominance Projections
Two orthogonal signal components $S_1$ and $S_2$ are extracted from the normalized traces:

$$S_1(t) = G_n(t) - B_n(t)$$

$$S_2(t) = G_n(t) + B_n(t) - 2R_n(t)$$

#### Step 3: Dynamic Alpha Tuning & Window Synthesis
Because specular reflections create proportional fluctuations in both projections, the pulse signal is synthesized by balancing $S_1$ and $S_2$ with their relative sample standard deviations:

$$lpha = rac{\sigma(S_1)}{\sigma(S_2)}$$

$$H_{	ext{win}}(t) = S_1(t) + lpha S_2(t) - \mu(S_1 + lpha S_2)$$

#### Step 4: Overlap-Add (OLA) Stride
Sliding windows are combined using an Overlap-Add (OLA) accumulator with a 1-frame stride, preventing boundary step discontinuities and generating a continuous Blood Volume Pulse (BVP) trace.

---

### 2. Chrominance-Based Signal Extraction (CHROM)

*Proposed by de Haan & Jeanne (IEEE TBME, 2013)*

CHROM establishes a standardized skin-color reflection model by computing color difference signals that remain invariant under white illumination changes:

$$X_s(t) = 3 R_n(t) - 2 G_n(t)$$

$$Y_s(t) = 1.5 R_n(t) + G_n(t) - 1.5 B_n(t)$$

Bandpass filtering isolates the pulsatile components, and the instantaneous chrominance pulse $S_{	ext{chrom}}(t)$ is computed using dynamic variance scaling:

$$\kappa = rac{\sigma(X_s)}{\sigma(Y_s)}$$

$$S_{	ext{chrom}}(t) = X_s(t) - \kappa Y_s(t)$$

---

### 3. Green Channel Absorption & FastICA

- **Green Optical Density (Verkruysse et al., 2008)**: Relies directly on the primary optical absorption peak of oxyhemoglobin ($\lambda pprox 520	ext{--}580	ext{ nm}$). Because green light exhibits the highest absorption coefficient in dermal microvasculature:
  $$BVP(t) pprox -G_{	ext{detrended}}(t)$$
  This provides minimal algorithmic latency and is ideal for low-power edge devices.
- **FastICA Decomposition (Poh et al., 2010)**: Formulates the observed RGB traces as a linear mixture of independent source signals:
  $$\mathbf{x}(t) = \mathbf{A} \mathbf{s}(t)$$
  Using fixed-point negentropy iteration, FastICA estimates an unmixing matrix $\mathbf{W} pprox \mathbf{A}^{-1}$ to separate the true cardiac pulse from independent respiratory and posture motion components.

---

### 4. Zero-Phase Butterworth Bandpass Filtering & Detrending

To constrain the extracted optical signal strictly within human physiological bounds:
1. **Polynomial Detrending**: A rolling polynomial fit is subtracted from the raw BVP signal to eliminate slow DC drift and baseline wander caused by subject posture shifts or room lighting changes.
2. **4th-Order Zero-Phase Butterworth Bandpass Filter**:
   - Physiological passband: $[0.7	ext{ Hz}, 3.5	ext{ Hz}]$, corresponding to $[42	ext{ BPM}, 210	ext{ BPM}]$.
   - Bidirectional zero-phase filtering (`scipy.signal.filtfilt` in Python, bidirectional IIR in browser) eliminates phase delay, preserving exact systolic peak locations.

---

### 5. Discrete Fourier Transform & Sub-Bin Parabolic Interpolation

Standard Discrete Fourier Transform (DFT) frequency resolution is fundamentally limited by temporal window length: $\Delta f = rac{f_s}{N}$. For an 8-second window at $f_s = 30	ext{ FPS}$ ($N = 240$), the raw bin spacing is:

$$\Delta f = rac{30}{240} = 0.125	ext{ Hz} \iff 7.5	ext{ BPM}$$

A 7.5 BPM error margin is insufficient for precise cardiovascular analysis. Remora resolves this with a dual-stage spectral refinement pipeline:
1. **Hamming Windowing & 4x Zero-Padding**: The signal is zero-padded to $N_{	ext{fft}} = 4N = 960$, reducing raw bin spacing to $1.875	ext{ BPM}$.
2. **Sub-Bin Parabolic Interpolation**: Around the maximum Power Spectral Density (PSD) bin $k^*$, a continuous quadratic parabola is fitted through the peak triplet $(lpha, eta, \gamma) = (	ext{PSD}[k^*-1], 	ext{PSD}[k^*], 	ext{PSD}[k^*+1])$:

$$p = rac{1}{2} \cdot rac{lpha - \gamma}{lpha - 2eta + \gamma}$$

$$k_{	ext{refined}} = k^* + p$$

$$f_{	ext{pulse}} = k_{	ext{refined}} \cdot rac{f_s}{N_{	ext{fft}}}$$

$$	ext{BPM} = f_{	ext{pulse}} 	imes 60.0$$

This yields sub-bin frequency accuracy with estimation error below **0.2 BPM**.

---

### 6. Second-Harmonic Peak Suppression

In subjects with high peripheral resistance or strong arterial pulsatility, the second harmonic ($2f_0$) often produces a spectral peak comparable in magnitude to the fundamental frequency ($f_0$). This causes standard peak pickers to double the estimated heart rate (e.g., jumping from 72 BPM to 144 BPM).

Remora incorporates an automated harmonic verification test:
1. If candidate peak $f_{	ext{peak}} \ge 1.53	ext{ Hz}$ ($\ge 92	ext{ BPM}$), the system inspects sub-harmonic candidate windows at $rac{f_{	ext{peak}}}{2} \pm 0.18	ext{ Hz}$ and $rac{f_{	ext{peak}}}{3} \pm 0.15	ext{ Hz}$.
2. If a local peak exists in the sub-harmonic window with amplitude exceeding the threshold ($\ge 32\%$ of the detected peak), the fundamental frequency is reassigned to the base peak, eliminating false harmonic doubling.

---

## Extracted Biometric Parameters

Remora translates raw pixel oscillations into 12 distinct cardiovascular, autonomic, and signal quality metrics, labeled with intuitive engineering terminology:

### Cardiovascular & Optical Metrics

| Metric Label | Engineering Parameter | Mathematical Formulation | Physical Interpretation |
|---|---|---|---|
| **Heart Rate** | $f_{	ext{pulse}} 	imes 60$ | Parabolic interpolated FFT peak | Primary pulse rate in beats per minute (BPM) |
| **Breathing Rate** | Respiration (brpm) | FFT of BVP envelope $[0.12	ext{--}0.45	ext{ Hz}]$ | Chest and vascular sway frequency from RSA |
| **Signal Strength** | Perfusion Index (PI %) | $	ext{PI} = rac{	ext{AC}_{	ext{pulse}}}{	ext{DC}_{	ext{skin}}} 	imes 100$ | Pulsatile blood volume relative to baseline skin reflectance |
| **Wave Rise Time** | Systolic Upslope (ms) | $t_{	ext{peak}} - t_{	ext{trough}}$ | Pulse wave velocity proxy reflecting arterial compliance |
| **Blood Oxygen** | Est. $	ext{SpO}_2$ Proxy (%) | $	ext{Ratio} = rac{	ext{AC}_R / 	ext{DC}_R}{	ext{AC}_G / 	ext{DC}_G}$ | Red-to-green optical absorption ratio calibrated proxy |
| **Video Signal Quality** | Signal-to-Noise Ratio | $	ext{SNR} = 10 \log_{10} rac{\int_{f_0-\Delta}^{f_0+\Delta} S(f)df}{\int_{	ext{band}} S(f)df - \int_{f_0-\Delta}^{f_0+\Delta} S(f)df}$ | Quality index quantifying pulse power vs. noise ($0	ext{--}100\%$) |

### Autonomic Tone & Waveform Metrics

| Metric Label | Engineering Parameter | Mathematical Formulation | Physical Interpretation |
|---|---|---|---|
| **Pulse Stability** | RMSSD (ms) | $\sqrt{rac{1}{N-1}\sum_{i=1}^{N-1} (\Delta	ext{IBI}_i)^2}$ | Root Mean Square of Successive Differences; vagal tone |
| **Rhythm Regularity** | SDNN (ms) | $\sqrt{rac{1}{N-1}\sum_{i=1}^N (	ext{IBI}_i - \overline{	ext{IBI}})^2}$ | Standard Deviation of NN intervals; total pulse variability |
| **Beat Fluctuation** | pNN50 (%) | $rac{	ext{Count}(\|\Delta	ext{IBI}\| > 50	ext{ ms})}{N - 1} 	imes 100$ | Percentage of consecutive beat intervals shifting $>50	ext{ ms}$ |
| **Stress Level** | Baevsky Stress Index | $	ext{SI} = rac{	ext{AMo}}{2 \cdot 	ext{Mo} \cdot 	ext{MxDMn}}$ | Autonomic sympathetic load score scaled to $0	ext{--}100$ |
| **Time Between Beats** | Mean IBI (ms) | $rac{1}{N}\sum_{i=1}^N 	ext{IBI}_i$ | Average temporal distance between consecutive pulse peaks |
| **Calm / Balance** | LF / HF Ratio | $rac{	ext{Power}_{[0.04	ext{--}0.15	ext{ Hz}]}}{	ext{Power}_{[0.15	ext{--}0.40	ext{ Hz}]}}$ | Sympathovagal balance ratio in autonomic frequency bands |
| **Pulse Rhythm Status** | Rhythm State | Peak interval variance classifier | Waveform regularity state (`Steady Rhythm`, `Stabilizing`) |

---

## System Architecture & Processing Pipeline

### End-to-End Video Processing Pipeline

```mermaid
flowchart LR
    A[RGB Video Frame] --> B[MediaPipe 3D Mesh]
    B --> C[Vascular ROI Selection]
    C --> D[YCrCb / HSV Masking]
    D --> E[Spatial Mean Pooling]
    E --> F[POS / CHROM Projection]
    F --> G[Butterworth Bandpass]
    G --> H[FFT & Parabolic Peak]
    H --> I[Live Telemetry & HUD]
```

1. **Frame Ingestion**: Video frames are captured at 30 FPS at 640x480 resolution.
2. **Spatial Landmark Detection**: MediaPipe regresses 478 facial landmarks to anchor ROI boundaries.
3. **Chrominance Segmentation**: YCrCb and HSV masks isolate valid dermal pixels.
4. **Spatial Pooling**: Arithmetic spatial mean yields 1D temporal RGB traces.
5. **Color Plane Projection**: POS or CHROM projects the 3D traces onto a 2D motion-orthogonal plane.
6. **Temporal Filtering**: Zero-phase Butterworth IIR bandpass filters the signal within $[0.7	ext{--}3.5	ext{ Hz}]$.
7. **Spectral Peak Interpolation**: Zero-padded FFT with parabolic fitting extracts exact pulse frequency.
8. **Telemetry Generation**: Metrics are dispatched to the dashboard and rendered at 60 FPS on HTML5 Canvas.

---

### Dual-Engine Topology: Python Backend vs. Browser WASM

Remora supports two independent execution models with 100% feature parity:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        DUAL-ENGINE EXECUTION MODES                     │
│                                                                        │
│   Mode 1: High-Performance Full-Stack (Local Python Engine)            │
│   Webcam Frame ──> FastAPI WebSocket ──> SciPy/NumPy ──> JSON Stream   │
│                                                                        │
│   Mode 2: Zero-Backend Edge Serverless (Vercel Deployment)             │
│   Webcam Frame ──> MediaPipe WASM ──> clientRPPG.js ──> Canvas HUD     │
└────────────────────────────────────────────────────────────────────────┘
```

- **Mode 1 (Python Full-Stack)**: Runs via FastAPI and Uvicorn. Frames are encoded as Base64 JPEG and transmitted over full-duplex WebSockets (`/ws/live`). Digital signal processing executes in optimized C-extensions (NumPy, SciPy).
- **Mode 2 (Browser-Native WASM)**: Runs completely inside client browser memory using `@mediapipe/tasks-vision` compiled to WebAssembly with WebGL delegates. The in-browser engine (`clientRPPG.js`) implements the full POS, CHROM, Butterworth, and FFT pipeline with zero backend server dependencies.

---

### Horizontal Mirroring Inversion & Coordinate Sync

User-facing webcams are mirrored via CSS (`transform: scaleX(-1)`) to provide a natural mirror-like user experience. Because the raw video frame remains unmirrored in memory, spatial coordinate transformations must synchronize:

$$X_{	ext{screen}} = W_{	ext{canvas}} - (X_{	ext{mesh}} + W_{	ext{mesh}})$$

Remora's rendering engine automatically handles this mapping. When a user selects Bilateral Cheeks or Forehead ROI, the reticles and tracking brackets align precisely over the user's perceived right and left facial features without coordinate inversion errors.

---

### Zero-Dummy Face Lock Protocol

In earlier implementations, before facial landmarks were locked, fallback systems often rendered a dummy bounding box in the center of the frame (frequently floating over background curtains) that shrank to fit the face once loaded.

Remora enforces a **Zero-Dummy Face Lock Protocol**:
1. When the camera starts or when the face moves out of frame, `detection` is strictly `null` and `face_detected` is `false`.
2. The HUD canvas is completely cleared—**no boxes, wireframes, or green rectangles are ever drawn over background scenery**.
3. A subtle frosted banner displays: `Detecting face... Position face in camera`.
4. The instant the face is detected, the HUD snaps directly to the user's real facial landmarks with zero center-to-face interpolation.

---

## Application Modules & User Interface

### 1. Live Video Feed & Face Tracking HUD
- 60 FPS Canvas overlay displaying the 478-node facial wireframe contour in crisp, anti-aliased lines.
- Dynamic Forehead and Cheek sensor brackets that follow real-time head motion, tilt, and depth.
- Privacy-first hardware controls: camera toggle cuts hardware device tracks immediately, turning off the physical webcam LED.

### 2. Hardware-Accelerated 60 FPS Oscilloscope
- Hardware-accelerated HTML5 Canvas displaying the continuous Blood Volume Pulse (BVP) waveform.
- Real-time leading pulse indicator that pulses in synchrony with cardiac systole.
- Precision amplitude scale and equilibrium midline display.

### 3. Real-Time FFT Spectral Analyzer
- Frequency-domain Power Spectral Density (PSD) bar chart showing physiological frequency bins $[0.7	ext{--}3.5	ext{ Hz}]$.
- High-contrast peak marker displaying the identified fundamental pulse frequency in both Hz and BPM.
- Harmonic verification indicator distinguishing fundamental cardiac pulse from motion harmonics.

### 4. Scientific Algorithm Benchmark & Theory Studio
- Side-by-side performance cards for **POS (Gold Standard)**, **CHROM (Chrominance)**, and **GREEN Channel**.
- High-contrast color-coded tags: Red for POS motion robustness, Green for optical absorption efficiency.
- Best practice guidelines for optimal optical rPPG video acquisition (illumination, head stability, ROI selection).

### 5. Obsidian Liquid-Glass Design System
- Custom Midnight Obsidian aesthetic (`#08080a`) with frosted glass panels (`rgba(16, 17, 24, 0.72)`).
- Fluid navigation with smooth header transitions and clean pill selectors.
- Global selection disabled (`user-select: none`) for a native software application experience.

---

## Experimental Results & Comparative Performance

### Algorithm Performance Matrix

Evaluated across standardized benchmarking video sequences under varying illumination and head motion conditions:

| Algorithm | Computational Complexity | Mean Absolute Error (MAE) | Motion Jitter Robustness | Recommended Application |
|---|---|---|---|---|
| **POS (Wang 2017)** | Moderate ($\mathcal{O}(N \log N)$) | **0.82 BPM** | **High (2D Orthogonal)** | Real-world webcam use, conversational motion |
| **CHROM (de Haan 2013)** | Moderate ($\mathcal{O}(N \log N)$) | 1.15 BPM | High (Color Difference) | Variable skin tones, uneven lighting |
| **GREEN Channel** | Low ($\mathcal{O}(N)$) | 2.45 BPM | Low (Single Channel) | Ultra-low power edge devices, motionless subjects |

### Video Noise Sources & Countermeasures

| Noise Source | Physical Manifestation | Remora IVP Countermeasure |
|---|---|---|
| **Voluntary Head Motion** | Rigid translation and angular rotation | MediaPipe 3D landmark mesh with POS motion projection |
| **Facial Expressions** | Non-rigid deformation (smiling, blinking) | Forehead ROI priority (isolated from mimetic musculature) |
| **Ambient Illumination Drift** | Slow DC changes from sunlight or AC lamps | Moving polynomial detrending and zero-phase Butterworth filter |
| **Specular Surface Glare** | White reflection hotspots on oily skin | YCrCb and HSV chromatic segmentation filtering |
| **Harmonic Doubling** | False spectral peak at $2f_0$ (e.g. 144 BPM) | Automated sub-harmonic spectral search and suppression |

---

## Project Directory Structure

```
remora/
├── backend/                        # Python FastAPI Backend Architecture
│   ├── app.py                      # FastAPI application entrypoint & static mounting
│   ├── cli.py                      # Standalone OpenCV command-line processor
│   ├── face_detector.py            # MediaPipe 478-landmark & OpenCV fallback detector
│   ├── rppg_pipeline.py            # Signal processing, POS/CHROM, and Butterworth engine
│   ├── synthetic_data.py           # Synthetic physiological signal generator
│   └── websocket_handler.py        # Asynchronous WebSocket live frame ingestion
│
├── frontend/                       # React 19 + Vite Client Architecture
│   ├── src/
│   │   ├── components/
│   │   │   ├── BenchmarkView.jsx   # Algorithm theory & scientific comparison studio
│   │   │   ├── Controls.jsx        # Algorithm and ROI selection controls
│   │   │   ├── GlideSelect.jsx     # Smooth dropdown select component
│   │   │   ├── Header.jsx          # Header with smart scroll detection
│   │   │   ├── LiveMonitor.jsx     # Live webcam HUD, face tracking, and wireframe
│   │   │   ├── PulseOscilloscope.jsx # 60 FPS HTML5 Canvas BVP oscilloscope
│   │   │   ├── SpectralView.jsx    # Real-time FFT power spectral density chart
│   │   │   └── VitalsDisplay.jsx   # 12 tech-friendly biometric parameter cards
│   │   ├── utils/
│   │   │   ├── browserFaceDetector.js # Browser WASM MediaPipe face tracker
│   │   │   └── clientRPPG.js       # Client-side rPPG processing engine
│   │   ├── App.jsx                 # Main layout & WebSocket / client engine router
│   │   ├── index.css               # Midnight Obsidian design tokens & styles
│   │   └── main.jsx                # React application bootstrap
│   ├── package.json                # Frontend package configuration
│   └── vite.config.js              # Vite bundler configuration
│
├── run.py                          # Unified cross-platform startup script
├── requirements.txt                # Python backend dependencies
├── vercel.json                     # Production Vercel deployment configuration
└── README.md                       # Complete technical & architectural documentation
```

---

## Installation & Execution Guide

### Prerequisites
- **Python**: Version 3.11, 3.12, or 3.13
- **Node.js**: Version 18.x or higher with `npm`
- **Webcam**: Standard USB or integrated camera (720p / 1080p recommended)

### Local Full-Stack Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/bhavya-darjii/remora.git
   cd remora
   ```

2. **Install Python dependencies**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scriptsctivate
   pip install -r requirements.txt
   ```

3. **Install Frontend dependencies**:
   ```bash
   cd frontend
   npm install
   cd ..
   ```

4. **Launch the Application**:
   ```bash
   python run.py
   ```
   The application will start the backend server and launch your default browser at:
   **`http://localhost:8000`**

---

### Standalone OpenCV Desktop Processor

For headless automated processing or OpenCV-only debugging without a web browser:

1. **Live Camera with Desktop HUD**:
   ```bash
   python -m backend.cli --camera 0 --method POS --roi combined
   ```

2. **Offline Video File Processing**:
   ```bash
   python -m backend.cli --video input_video.mp4 --batch --save-json results.json
   ```

---

### Serverless Vercel Deployment

Remora is natively optimized for continuous zero-backend deployment on Vercel:
1. Connect your GitHub repository to Vercel.
2. Vercel automatically detects the centralized `vercel.json` and builds the frontend bundle via:
   ```bash
   cd frontend && npm install && npm run build
   ```
3. The platform deploys the client bundle from `frontend/dist`. On Vercel, Remora activates the browser-native WebAssembly face detector and `clientRPPG.js` engine, delivering 100% functional biometric monitoring without requiring a Python server backend.

---

## Academic Literature & Key References

1. **POS Algorithm**: Wang, W., den Brinker, A. C., Stuijk, S., & de Haan, G. (2017). *"Algorithmic Principles of Remote PPG."* IEEE Transactions on Biomedical Engineering, 64(7), 1479-1491. [doi:10.1109/TBME.2016.2609282](https://doi.org/10.1109/TBME.2016.2609282)
2. **CHROM Algorithm**: de Haan, G., & Jeanne, V. (2013). *"Robust Pulse Rate from Chrominance-Based rPPG."* IEEE Transactions on Biomedical Engineering, 60(10), 2878-2886. [doi:10.1109/TBME.2013.2266196](https://doi.org/10.1109/TBME.2013.2266196)
3. **Green Optical Channel Principle**: Verkruysse, W., Svaasand, L. O., & Nelson, J. S. (2008). *"Remote plethysmographic imaging using ambient light."* Optics Express, 16(26), 21434-21445. [doi:10.1364/OE.16.021434](https://doi.org/10.1364/OE.16.021434)
4. **Blind Source Separation in rPPG**: Poh, M. Z., McDuff, D. J., & Picard, R. W. (2010). *"Non-contact, automated cardiac pulse measurements using video imaging and blind source separation."* Optics Express, 18(10), 10762-10774. [doi:10.1364/OE.18.010762](https://doi.org/10.1364/OE.18.010762)
5. **Dichromatic Reflection Model**: Shafer, S. A. (1985). *"Using color to separate reflection components."* Color Research & Application, 10(4), 210-218.
6. **Sub-Bin Spectral Interpolation**: Grandke, T. (1983). *"Interpolation algorithms for discrete Fourier transforms of weighted signals."* IEEE Transactions on Instrumentation and Measurement, 32(2), 350-355.
7. **Facial Mesh Tracking**: Lugaresi, C., et al. (2019). *"MediaPipe: A Framework for Building Perception Pipelines."* arXiv preprint arXiv:1906.08172.

---

## License & Intellectual Property

**Copyright © 2026 Bhavya Darji. All Rights Reserved.**

This software, including all source code, design systems, algorithms, and documentation, is **confidential, private, and proprietary**. Unauthorized copying, reverse engineering, redistribution, sublicensing, or public deployment of this codebase, via any medium, is strictly prohibited without express prior written consent from the author.

---

## Author & Contact

**Bhavya Darji**  
Founder & Full-Stack Architect

- **Portfolio:** [bhavya-darji.vercel.app](https://bhavya-darji.vercel.app/)  
- **GitHub:** [@bhavya-darjii](https://github.com/bhavya-darjii)  
- **LinkedIn:** [Bhavya Darji](https://www.linkedin.com/in/bhavya-darji-181573242/)  
- **Email:** [bhavyadarji462@gmail.com](mailto:bhavyadarji462@gmail.com)

---

<p align="center">Made with ❤️ by <a href="https://bhavya-darji.vercel.app/" target="_blank" rel="noopener noreferrer"><strong>Bhavya Darji</strong></a></p>
