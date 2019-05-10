export type IconConfigType = {
    type: string,
    d: string,
    viewBox: string
}

export type IconConfigsType = {
    [s : string] : IconConfigType
}

export const IconConfig : IconConfigsType = {
    add: {
        type: "polygon",
        d: "14 8 8 8 8 14 6 14 6 8 0 8 0 6 6 6 6 0 8 0 8 6 14 6",
        viewBox: "0 0 14 14"
    },
    'arrow-drop-down': {
        type: "polygon",
        d: "7 10 12 15 17 10",
        viewBox: "0 0 24 24"
    },
    'arrow-forward': {
        type: "polygon",
        d: "5.88 4.12 13.76 12 5.88 19.88 8 22 18 12 8 2",
        viewBox: "0 0 24 24"
    },
    'aspect-ratio': {
        type: "path",
        d: "M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z",
        viewBox: "0 0 24 24"
    },
    'back-arrow': {
        type: "path",
        d: "M13.3125,7 L15.5,9.1875 L12.375,12.3125 L15.5,15.4375 L13.3125,17.625 L8,12.3125 L13.3125,7 Z M12.5,25 C19.375,25 25,19.375 25,12.5 C25,5.625 19.375,0 12.5,0 C5.625,0 0,5.625 0,12.5 C0,19.375 5.625,25 12.5,25 Z M12.5,3.125 C17.65625,3.125 21.875,7.34375 21.875,12.5 C21.875,17.65625 17.65625,21.875 12.5,21.875 C7.34375,21.875 3.125,17.65625 3.125,12.5 C3.125,7.34375 7.34375,3.125 12.5,3.125 Z",
        viewBox: "0 0 25 25"
    },
    check: {
        type: "path",
        d: "9 16.17 4.83 12 3.41 13.41 9 19 21 7 19.59 5.59",
        viewBox: "0 0 24 24"
    },
    close: {
        type: "path",
        d: "M14 1.4L12.6 0 7 5.6 1.4 0 0 1.4 5.6 7 0 12.6 1.4 14 7 8.4l5.6 5.6 1.4-1.4L8.4 7",
        viewBox: "0 0 14 14"
    },
    delete: {
        type: "path",
        d: "M6,19 C6,20.1 6.9,21 8,21 L16,21 C17.1,21 18,20.1 18,19 L18,7 L6,7 L6,19 Z M19,4 L15.5,4 L14.5,3 L9.5,3 L8.5,4 L5,4 L5,6 L19,6 L19,4 Z",
        viewBox: "0 0 24 24"
    },
    download: {
        type: "path",
        d: "M19,9 L15,9 L15,3 L9,3 L9,9 L5,9 L12,16 L19,9 Z M5,18 L5,20 L19,20 L19,18 L5,18 Z",
        viewBox: "0 0 20 24"
    },
    'download-cloud': {
        type: "path",
        d: "M19.872,7.076 C19.189,3.045 15.666,0 11.5,0 C7.196,0 3.623,3.196 3.081,7.396 C1.236,8.161 0,9.963 0,12 C0,14.757 2.243,17 5,17 L19,17 C21.757,17 24,14.757 24,12 C24,9.54 22.215,7.49 19.872,7.076 Z M12,14 L7,9 L11,9 L11,5 L13,5 L13,9 L17,9 L12,14 Z",
        viewBox: "0 0 24 17"
    },
    eraser: {
        type: "path",
        d: "M1,20 L21,20 L21,22 L1,22 L1,20 Z M5.5,18 L0.98,13.48 C0.589, 13.089 0.589,12.457 0.98,12.066 L12.753,0.293 C13.144,-0.098 13.776, -0.098 14.167,0.293 L21.021,7.147 C21.412,7.538 21.412,8.17 21.021,8.561 L11.581,18 L5.5,18 Z",
        viewBox: "0 0 22 22"
    },
    filter: {
        type: "path",
        d: "M9 14H7c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1s-.448 1-1 1zm2-4H5c-.552 0-1-.448-1-1s.448-1 1-1h6c.552 0 1 .448 1 1s-.448 1-1 1zm2-4H3c-.552 0-1-.448-1-1s.448-1 1-1h10c.552 0 1 .448 1 1s-.448 1-1 1zm2-4H1c-.552 0-1-.448-1-1s.448-1 1-1h14c.552 0 1 .448 1 1s-.448 1-1 1z",
        viewBox: "0 0 16 16"
    },
    flag: {
        type: "path",
        d: "M14 1H2c0-.6-.4-1-1-1S0 .4 0 1v14c0 .6.4 1 1 1s1-.4 1-1v-5h12V1z",
        viewBox: "0 0 16 16"
    },
    'open-folder': {
        type: "path",
        d: "M23.805,8.406C23.616,8.15,23.317,8,23,8h-2V5c0-0.552-0.447-1-1-1h-9.465L8.832,1.445 C8.646,1.167,8.334,1,8,1H1C0.447,1,0,1.448,0,2v19.978c-0.002,0.074,0.005,0.148,0.02,0.22c0.029,0.145,0.09,0.279,0.174,0.395 c0.087,0.118,0.199,0.217,0.333,0.289c0.099,0.053,0.208,0.091,0.323,0.108C0.9,22.997,0.95,23,1,23c0.008,0,0.016,0,0.023,0H19 c0.439,0,0.827-0.286,0.956-0.706l4-13C24.049,8.991,23.993,8.661,23.805,8.406z M2,3h5.465l1.703,2.555C9.354,5.833,9.666,6,10,6h9 v2H5C4.561,8,4.173,8.286,4.044,8.706L2,15.35V3z",
        viewBox: "0 0 16 16"
    },
    'closed-folder': {
        type: "path",
        d: "M23,4H12.5L9.8,0.4C9.6,0.1,9.3,0,9,0H1C0.4,0,0,0.4,0,1v22c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V5 C24,4.4,23.6,4,23,4z",
        viewBox: "0 0 16 16"
    },
    forward: {
        type: "path",
        d: "M14,9 L14,5 L21,12 L14,19 L14,14.9 C9,14.9 5.5,16.5 3,20 C4,15 7,10 14,9 Z",
        viewBox: "0 0 24 24"
    },
    halt: {
        type: "path",
        d: "M396.369272,315.017328 C395.063135,315.198605 394.099537,316.328963 394.127272,317.647328 L394.127272,331.004328 C394.127272,331.556613 393.679557,332.004328 393.127272,332.004328 C392.574987,332.004328 392.127272,331.556613 392.127272,331.004328 L392.127272,316.174328 C392.163131,314.535008 390.921613,313.14874 389.288272,313.004328 C388.465113,312.960087 387.660018,313.256517 387.062088,313.823993 C386.464158,314.391468 386.126084,315.179982 386.127272,316.004328 L386.127272,331.004328 C386.127272,331.556613 385.679557,332.004328 385.127272,332.004328 C384.574987,332.004328 384.127272,331.556613 384.127272,331.004328 L384.127272,314.174328 C384.163131,312.535008 382.921613,311.14874 381.288272,311.004328 C380.465113,310.960087 379.660018,311.256517 379.062088,311.823993 C378.464158,312.391468 378.126084,313.179982 378.127272,314.004328 L378.127272,331.004328 C378.127272,331.556613 377.679557,332.004328 377.127272,332.004328 C376.574987,332.004328 376.127272,331.556613 376.127272,331.004328 L376.127272,316.174328 C376.163131,314.535008 374.921613,313.14874 373.288272,313.004328 C372.465113,312.960087 371.660018,313.256517 371.062088,313.823993 C370.464158,314.391468 370.126084,315.179982 370.127272,316.004328 L370.127272,334.981328 C370.12707,336.037084 369.571936,337.01502 368.665531,337.556362 C367.759127,338.097704 366.634892,338.122757 365.705272,337.622328 L358.968272,333.996328 C358.023978,333.456548 356.849585,333.527617 355.977272,334.177328 C354.860517,335.06949 354.673362,336.695818 355.558272,337.818328 L367.527272,352.565328 C369.805329,355.372852 373.227788,357.003626 376.843272,357.004328 L387.127272,357.004328 C393.754689,357.004328 399.127272,351.631745 399.127272,345.004328 L399.127272,317.504328 C399.127371,316.796327 398.827266,316.121485 398.301469,315.647352 C397.775671,315.173219 397.073493,314.944263 396.369272,315.017328 Z",
        viewBox: "0 0 45 47"
    },
    heart: {
        type: "path",
        d: "M43.192,6.808c-5.068-5.068-13.316-5.068-18.385,0C24.526,7.089,24.257,7.385,24,7.695 c-0.257-0.311-0.526-0.606-0.808-0.888c-5.068-5.068-13.316-5.068-18.385,0s-5.068,13.316,0,18.385l18.485,18.485 c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l18.485-18.485C48.261,20.124,48.261,11.876,43.192,6.808z",
        viewBox: "0 0 48 48"
    },
    'info-outline': {
        type: "path",
        d: "M11,17 L13,17 L13,11 L11,11 L11,17 Z M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M12,20 C7.59,20 4,16.41 4,12 C4,7.59 7.59,4 12,4 C16.41,4 20,7.59 20,12 C20,16.41 16.41,20 12,20 Z M11,9 L13,9 L13,7 L11,7 L11,9 Z",
        viewBox: "0 0 24 24"
    },
    'open-library': {
        type: "path",
        d: "M19 0h-3v6h3c.553 0 1-.448 1-1V1c0-.552-.447-1-1-1zM23 8h-3v6h3c.553 0 1-.448 1-1V9c0-.552-.447-1-1-1zM19 16h-3v6h3c.553 0 1-.448 1-1v-4c0-.552-.447-1-1-1zM1 0C.447 0 0 .448 0 1v4c0 .552.447 1 1 1h13V0H1zM5 8c-.553 0-1 .448-1 1v4c0 .552.447 1 1 1h13V8H5zM1 16c-.553 0-1 .448-1 1v4c0 .552.447 1 1 1h13v-6H1z",
        viewBox: "0 0 24 20"
    },
    'library-feed': {
        type: "path",
        d: "M15,4 L4,4 C3.4,4 3,3.6 3,3 L3,1 C3,0.4 3.4,0 4,0 L15,0 C15.6,0 16,0.4 16,1 L16,3 C16,3.6 15.6,4 15,4 Z M12,10 L1,10 C0.4,10 0,9.6 0,9 L0,7 C0,6.4 0.4,6 1,6 L12,6 C12.6,6 13,6.4 13,7 L13,9 C13,9.6 12.6,10 12,10 Z M15,16 L4,16 C3.4,16 3,15.6 3,15 L3,13 C3,12.4 3.4,12 4,12 L15,12 C15.6,12 16,12.4 16,13 L16,15 C16,15.6 15.6,16 15,16 Z",
        viewBox: "0 0 16 16"
    },
    list: {
        type: "path",
        d: "M3,13 L5,13 L5,11 L3,11 L3,13 Z M3,17 L5,17 L5,15 L3,15 L3,17 Z M3,9 L5,9 L5,7 L3,7 L3,9 Z M7,13 L21,13 L21,11 L7,11 L7,13 Z M7,17 L21,17 L21,15 L7,15 L7,17 Z M7,7 L7,9 L21,9 L21,7 L7,7 Z",
        viewBox: "0 0 24 24"
    },
    masonry: {
        type: "path",
        d: "M6,9 L1,9 C0.448,9 0,8.552 0,8 L0,1 C0,0.448 0.448,0 1,0 L6,0 C6.552,0 7,0.448 7,1 L7,8 C7,8.552 6.552,9 6,9 Z M6,16 L1,16 C0.448,16 0,15.552 0,15 L0,12 C0,11.448 0.448,11 1,11 L6,11 C6.552,11 7,11.448 7,12 L7,15 C7,15.552 6.552,16 6,16 Z M15,6 L10,6 C9.448,6 9,5.552 9,5 L9,1 C9,0.448 9.448,0 10,0 L15,0 C15.552,0 16,0.448 16,1 L16,5 C16,5.552 15.552,6 15,6 Z M15,16 L10,16 C9.448,16 9,15.552 9,15 L9,9 C9,8.448 9.448,8 10,8 L15,8 C15.552,8 16,8.448 16,9 L16,15 C16,15.552 15.552,16 15,16 Z",
        viewBox: "0 0 16 16"
    },
    minus: {
        type: "path",
        d: "M2 4h5v1H2z",
        viewBox: "0 0 9 9"
    },
    'mode-comment': {
        type: "path",
        d: "M21.99,4 C21.99,2.9 21.1,2 20,2 L4,2 C2.9,2 2,2.9 2,4 L2,16 C2,17.1 2.9,18 4,18 L18,18 L22,22 L21.99,4 Z",
        viewBox: "0 0 24 24"
    },
    'mode-edit': {
        type: "path",
        d: "M3,17.25 L3,21 L6.75,21 L17.81,9.94 L14.06,6.19 L3,17.25 Z M20.71,7.04 C21.1,6.65 21.1,6.02 20.71,5.63 L18.37,3.29 C17.98,2.9 17.35,2.9 16.96,3.29 L15.13,5.12 L18.88,8.87 L20.71,7.04 Z",
        viewBox: "0 0 24 24"
    },
    more: {
        type: "path",
        d: "M6,10 C4.9,10 4,10.9 4,12 C4,13.1 4.9,14 6,14 C7.1,14 8,13.1 8,12 C8,10.9 7.1,10 6,10 Z M18,10 C16.9,10 16,10.9 16,12 C16,13.1 16.9,14 18,14 C19.1,14 20,13.1 20,12 C20,10.9 19.1,10 18,10 Z M12,10 C10.9,10 10,10.9 10,12 C10,13.1 10.9,14 12,14 C13.1,14 14,13.1 14,12 C14,10.9 13.1,10 12,10 Z",
        viewBox: "0 0 24 24"
    },
    'more-vert': {
        type: "path",
        d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
        viewBox: "0 0 24 24"
    },
    notification: {
        type: "path",
        d: "M18,16 L18,11 C18,7.93 16.36,5.36 13.5,4.68 L13.5,4 C13.5,3.17 12.83,2.5 12,2.5 C11.17,2.5 10.5,3.17 10.5,4 L10.5,4.68 C7.63,5.36 6,7.92 6,11 L6,16 L4,18 L4,19 L20,19 L20,18 L18,16 Z M12,22 C13.1,22 14,21.1 14,20 L10,20 C10,21.1 10.89,22 12,22 Z",
        viewBox: "0 0 24 24"
    },
    people: {
        type: "path",
        d: "M10.2,12.4 L7.5,10.4 C8.4,9.7 9,8.7 9,7.5 L9,6.7 C9,4.8 7.6,3.1 5.7,3 C3.7,2.9 2,4.5 2,6.5 L2,7.5 C2,8.7 2.6,9.7 3.5,10.4 L0.8,12.5 C0.3,12.9 0,13.5 0,14.1 L0,16 C0,16.6 0.4,17 1,17 L10,17 C10.6,17 11,16.6 11,16 L11,14 C11,13.4 10.7,12.8 10.2,12.4 Z M15.1,7.4 L13.3,6.2 C13.7,5.8 14,5.2 14,4.5 L14,3.6 C14,2.4 13.1,1.2 11.9,1 C10.7,0.8 9.7,1.5 9.2,2.4 C10.3,3.4 11,4.8 11,6.4 L11,7.4 C11,8.3 10.8,9.2 10.4,9.9 C10.4,9.9 11.6,10.8 11.6,10.9 L15,10.9 C15.6,10.9 16,10.5 16,9.9 L16,9.1 C16,8.4 15.7,7.8 15.1,7.4 Z",
        viewBox: "0 0 16 16"
    },
    person: {
        type: "path",
        d: "M12,0 C5.383,0 0,5.383 0,12 C0,18.617 5.383,24 12,24 C18.617,24 24,18.617 24,12 C24,5.383 18.617,0 12,0 Z M8,10 C8,7.791 9.844,6 12,6 C14.156,6 16,7.791 16,10 L16,11 C16,13.209 14.156,15 12,15 C9.844,15 8,13.209 8,11 L8,10 Z M12,22 C9.567,22 7.335,21.124 5.599,19.674 C6.438,18.091 8.083,17 10,17 L14,17 C15.917,17 17.562,18.091 18.401,19.674 C16.665,21.124 14.433,22 12,22 Z",
        viewBox: "0 0 24 24"
    },
    play: {
        type: "path",
        d: "M23,0 C10.317,0 0,10.317 0,23 C0,35.683 10.317,46 23,46 C35.683,46 46,35.683 46,23 C46,10.317 35.683,0 23,0 Z M31.524,23.852 L18.524,31.852 C18.363,31.95 18.182,32 18,32 C17.832,32 17.664,31.958 17.512,31.873 C17.196,31.696 17,31.362 17,31 L17,15 C17,14.638 17.196,14.304 17.512,14.127 C17.829,13.949 18.215,13.958 18.525,14.148 L31.525,22.148 C31.82,22.33 32,22.652 32,23 C32,23.348 31.82,23.67 31.524,23.852 Z",
        viewBox: "0 0 46 46"
    },
    plug: {
        type: "path",
        d: "M16,3 L13,3 L13,0 L11,0 L11,3 L5,3 L5,0 L3,0 L3,3 L0,3 L0, 5 L2,5 L2,8 C2,10.4 3.7,12.4 6,12.9 L6,15 C6,15.6 6.4,16 7,16 L9, 16 C9.6,16 10,15.6 10,15 L10,12.9 C12.3,12.4 14,10.4 14,8 L14,5 L16,5 L16,3 Z",
        viewBox: "0 0 16 16"
    },
    plus: {
        type: "path",
        d: "M4 4H2v1h2v2h1V5h2V4H5V2H4v2z",
        viewBox: "0 0 9 9"
    },
    present: {
        type: "path",
        d: "M15,4 L12,4 L12,1 C12,0.448 11.552,0 11,0 L5,0 C4.448,0 4,0.448 4,1 L4,4 L1,4 C0.448,4 0,4.448 0,5 L0,15 C0,15.552 0.448,16 1,16 L15,16 C15.552,16 16,15.552 16,15 L16,5 C16,4.448 15.552,4 15,4 Z M6,2 L10,2 L10,4 L6,4 L6,2 Z M6,13 L6,7 L11,10 L6,13 Z",
        viewBox: "0 0 16 16"
    },
    projects: {
        type: "path",
        d: "M3 2h10c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1zm12 2H1c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1zm-3 7H4V7h2v2h4V7h2v4z",
        viewBox: "0 0 16 16"
    },
    search: {
        type: "path",
        d: "M15.707,13.293 L13,10.586 C13.63,9.536 14,8.311 14,7 C14,3.14 10.859,0 7,0 C3.141,0 0,3.14 0,7 C0,10.86 3.141,14 7,14 C8.312,14 9.536,13.631 10.586,13 L13.293,15.707 C13.488,15.902 13.744,16 14,16 C14.256,16 14.512,15.902 14.707,15.707 L15.707,14.707 C16.098,14.316 16.098,13.684 15.707,13.293 Z M7,12 C4.239,12 2,9.761 2,7 C2,4.239 4.239,2 7,2 C9.761,2 12,4.239 12,7 C12,9.761 9.761,12 7,12 Z",
        viewBox: "0 0 16 16"
    },
    send: {
        type: "path",
        d: "M.423 10.048L3 12l9-4-6.977 5.499v6.749c0 .933 1.164 1.358 1.765.644l3.131-3.72 6.5 4.876c.589.441 1.436.118 1.581-.604l4.004-20c.156-.779-.615-1.42-1.352-1.125l-20 8c-.724.29-.853 1.261-.229 1.729z",
        viewBox: "0 0 24 24"
    },
    sent: {
        type: "path",
        d: "M15.707,0.293 C15.434,0.021 15.027,-0.072 14.664,0.059 L0.664,5.059 C0.287,5.193 0.026,5.54 0.002,5.939 C-0.022,6.339 0.194,6.714 0.553,6.894 L5.139,9.186 L11,5 L6.813,10.862 L9.105,15.448 C9.276,15.787 9.623,16 10,16 C10.021,16 10.041,15.999 10.061,15.998 C10.461,15.974 10.808,15.714 10.943,15.336 L15.943,1.336 C16.072,0.973 15.98,0.566 15.707,0.293 Z",
        viewBox: "0 0 16 16"
    },
    settings: {
        type: "path",
        d: "M19.43,12.98 C19.47,12.66 19.5,12.34 19.5,12 C19.5,11.66 19.47,11.34 19.43,11.02 L21.54,9.37 C21.73,9.22 21.78,8.95 21.66,8.73 L19.66,5.27 C19.54,5.05 19.27,4.97 19.05,5.05 L16.56,6.05 C16.04,5.65 15.48,5.32 14.87,5.07 L14.49,2.42 C14.46,2.18 14.25,2 14,2 L10,2 C9.75,2 9.54,2.18 9.51,2.42 L9.13,5.07 C8.52,5.32 7.96,5.66 7.44,6.05 L4.95,5.05 C4.72,4.96 4.46,5.05 4.34,5.27 L2.34,8.73 C2.21,8.95 2.27,9.22 2.46,9.37 L4.57,11.02 C4.53,11.34 4.5,11.67 4.5,12 C4.5,12.33 4.53,12.66 4.57,12.98 L2.46,14.63 C2.27,14.78 2.22,15.05 2.34,15.27 L4.34,18.73 C4.46,18.95 4.73,19.03 4.95,18.95 L7.44,17.95 C7.96,18.35 8.52,18.68 9.13,18.93 L9.51,21.58 C9.54,21.82 9.75,22 10,22 L14,22 C14.25,22 14.46,21.82 14.49,21.58 L14.87,18.93 C15.48,18.68 16.04,18.34 16.56,17.95 L19.05,18.95 C19.28,19.04 19.54,18.95 19.66,18.73 L21.66,15.27 C21.78,15.05 21.73,14.78 21.54,14.63 L19.43,12.98 Z M12,15.5 C10.07,15.5 8.5,13.93 8.5,12 C8.5,10.07 10.07,8.5 12,8.5 C13.93,8.5 15.5,10.07 15.5,12 C15.5,13.93 13.93,15.5 12,15.5 Z",
        viewBox: "0 0 24 24"
    },
    'settings-large': {
        type: "path",
        d: "M13.3,5.2 L14.4,3.1 L13,1.7 L10.9,2.8 C10.6,2.6 10.2,2.5 9.8,2.4 L9,0 L7,0 L6.2,2.3 C5.9,2.4 5.5,2.5 5.2,2.7 L3.1,1.6 L1.6,3.1 L2.7,5.2 C2.5,5.5 2.4,5.9 2.3,6.2 L0,7 L0,9 L2.3,9.8 C2.4,10.2 2.6,10.5 2.7,10.9 L1.6,13 L3,14.4 L5.1,13.3 C5.4,13.5 5.8,13.6 6.2,13.7 L7,16 L9,16 L9.8,13.7 C10.2,13.6 10.5,13.4 10.9,13.3 L13,14.4 L14.4,13 L13.3,10.9 C13.5,10.6 13.6,10.2 13.7,9.8 L16,9 L16,7 L13.7,6.2 C13.6,5.9 13.5,5.5 13.3,5.2 Z M8,11 C6.3,11 5,9.7 5,8 C5,6.3 6.3,5 8,5 C9.7,5 11,6.3 11,8 C11,9.7 9.7,11 8,11 Z",
        viewBox: "0 0 16 16"
    },
    'subscriptions': {
        type: "path",
        d: "M40 16H8v-4h32v4zM36 4H12v4h24V4zm8 20v16c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V24c0-2.21 1.79-4 4-4h32c2.21 0 4 1.79 4 4zm-12 8l-12-6.53v13.06L32 32z",
        viewBox: "0 0 48 48"
    },
    tag: {
        type: "path",
        d: "M21.41,11.58 L12.41,2.58 C12.05,2.22 11.55,2 11,2 L4,2 C2.9,2 2,2.9 2,4 L2,11 C2,11.55 2.22,12.05 2.59,12.42 L11.59,21.42 C11.95,21.78 12.45,22 13,22 C13.55,22 14.05,21.78 14.41,21.41 L21.41,14.41 C21.78,14.05 22,13.55 22,13 C22,12.45 21.77,11.94 21.41,11.58 Z M5.5,7 C4.67,7 4,6.33 4,5.5 C4,4.67 4.67,4 5.5,4 C6.33,4 7,4.67 7,5.5 C7,6.33 6.33,7 5.5,7 Z",
        viewBox: "0 0 24 24"
    },
    'thumbs-up': {
        type: "path",
        d: "M3,20 L1,20 C0.4,20 0,19.6 0,19 L0,10 C0,9.4 0.4,9 1,9 L3,9 C3.6,9 4,9.4 4,10 L4,19 C4,19.6 3.6,20 3,20 Z M18,8 C19.1,8 20,8.9 20,10 L19,18 C19,19.1 18.1,20 17,20 L10,20 C8.7,20 7.4,19.7 6.3,19.1 L6,19 L6,8.6 L9,5 L9,1 C9,0.2 9.8,-0.2 10.5,0.1 C12,1 13,3.3 13,5 L13,8 L18,8 Z",
        viewBox: "0 0 20 20"
    },
    view: {
        type: "path",
        d: "M11 .5C6 .5 1.73 3.61 0 8c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C20.27 3.61 16 .5 11 .5zM11 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8C9.34 5 8 6.34 8 8s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",
        viewBox: "0 0 22 16"
    }
}