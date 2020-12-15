import React from 'react'
import '../css/title.css'
import Typical from 'react-typical'


const Title = () => {
return (
   <div id="home-section">
    <div className="aligning-typing">
     <p className='typer'>
     <Typical  
      loop={Infinity}
      wrapper="b"
      steps={[
        'Hi ! ',
        1000,
        'I am Ahmed ',
        1500,
        'Welcome .',
        2000
      ]}
     />
     </p>
    </div>
     <div className="page-title">
        <svg id="logo" width={722} height={83} viewBox="0 0 722 83" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
          <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="4.54401" y="0.720001" width={714} height={74} fill="black">
            <rect fill="white" x="4.54401" y="0.720001" width={714} height={74} />
            <path d="M33.912 4.816V10.144H12.096V27.064H29.808V32.392H12.096V55H5.54401V4.816H33.912Z" />
            <path d="M76.8173 15.544V55H70.2653V49.168C69.0173 51.184 67.2653 52.768 65.0093 53.92C62.8013 55.024 60.3533 55.576 57.6653 55.576C54.5933 55.576 51.8333 54.952 49.3853 53.704C46.9373 52.408 44.9933 50.488 43.5533 47.944C42.1613 45.4 41.4653 42.304 41.4653 38.656V15.544H47.9453V37.792C47.9453 41.68 48.9293 44.68 50.8973 46.792C52.8653 48.856 55.5533 49.888 58.9613 49.888C62.4653 49.888 65.2253 48.808 67.2413 46.648C69.2573 44.488 70.2653 41.344 70.2653 37.216V15.544H76.8173Z" />
            <path d="M94.4319 1.72V55H87.8799V1.72H94.4319Z" />
            <path d="M112.151 1.72V55H105.599V1.72H112.151Z" />
            <path d="M158.425 55.504C155.113 55.504 152.137 54.928 149.497 53.776C146.905 52.576 144.865 50.944 143.377 48.88C141.889 46.768 141.121 44.344 141.073 41.608H148.057C148.297 43.96 149.257 45.952 150.937 47.584C152.665 49.168 155.161 49.96 158.425 49.96C161.545 49.96 163.993 49.192 165.769 47.656C167.593 46.072 168.505 44.056 168.505 41.608C168.505 39.688 167.977 38.128 166.921 36.928C165.865 35.728 164.545 34.816 162.961 34.192C161.377 33.568 159.241 32.896 156.553 32.176C153.241 31.312 150.577 30.448 148.561 29.584C146.593 28.72 144.889 27.376 143.449 25.552C142.057 23.68 141.361 21.184 141.361 18.064C141.361 15.328 142.057 12.904 143.449 10.792C144.841 8.68 146.785 7.048 149.281 5.896C151.825 4.744 154.729 4.168 157.993 4.168C162.697 4.168 166.537 5.344 169.513 7.696C172.537 10.048 174.241 13.168 174.625 17.056H167.425C167.185 15.136 166.177 13.456 164.401 12.016C162.625 10.528 160.273 9.784 157.345 9.784C154.609 9.784 152.377 10.504 150.649 11.944C148.921 13.336 148.057 15.304 148.057 17.848C148.057 19.672 148.561 21.16 149.569 22.312C150.625 23.464 151.897 24.352 153.385 24.976C154.921 25.552 157.057 26.224 159.793 26.992C163.105 27.904 165.769 28.816 167.785 29.728C169.801 30.592 171.529 31.96 172.969 33.832C174.409 35.656 175.129 38.152 175.129 41.32C175.129 43.768 174.481 46.072 173.185 48.232C171.889 50.392 169.969 52.144 167.425 53.488C164.881 54.832 161.881 55.504 158.425 55.504Z" />
            <path d="M192.763 20.944V44.2C192.763 46.12 193.171 47.488 193.987 48.304C194.803 49.072 196.219 49.456 198.235 49.456H203.059V55H197.155C193.507 55 190.771 54.16 188.947 52.48C187.123 50.8 186.211 48.04 186.211 44.2V20.944H181.099V15.544H186.211V5.608H192.763V15.544H203.059V20.944H192.763Z" />
            <path d="M208.549 35.128C208.549 31.096 209.365 27.568 210.997 24.544C212.629 21.472 214.861 19.096 217.693 17.416C220.573 15.736 223.765 14.896 227.269 14.896C230.725 14.896 233.725 15.64 236.269 17.128C238.813 18.616 240.709 20.488 241.957 22.744V15.544H248.581V55H241.957V47.656C240.661 49.96 238.717 51.88 236.125 53.416C233.581 54.904 230.605 55.648 227.197 55.648C223.693 55.648 220.525 54.784 217.693 53.056C214.861 51.328 212.629 48.904 210.997 45.784C209.365 42.664 208.549 39.112 208.549 35.128ZM241.957 35.2C241.957 32.224 241.357 29.632 240.157 27.424C238.957 25.216 237.325 23.536 235.261 22.384C233.245 21.184 231.013 20.584 228.565 20.584C226.117 20.584 223.885 21.16 221.869 22.312C219.853 23.464 218.245 25.144 217.045 27.352C215.845 29.56 215.245 32.152 215.245 35.128C215.245 38.152 215.845 40.792 217.045 43.048C218.245 45.256 219.853 46.96 221.869 48.16C223.885 49.312 226.117 49.888 228.565 49.888C231.013 49.888 233.245 49.312 235.261 48.16C237.325 46.96 238.957 45.256 240.157 43.048C241.357 40.792 241.957 38.176 241.957 35.2Z" />
            <path d="M257.205 35.2C257.205 31.12 258.021 27.568 259.653 24.544C261.285 21.472 263.541 19.096 266.421 17.416C269.349 15.736 272.685 14.896 276.429 14.896C281.277 14.896 285.261 16.072 288.381 18.424C291.549 20.776 293.637 24.04 294.645 28.216H287.589C286.917 25.816 285.597 23.92 283.629 22.528C281.709 21.136 279.309 20.44 276.429 20.44C272.685 20.44 269.661 21.736 267.357 24.328C265.053 26.872 263.901 30.496 263.901 35.2C263.901 39.952 265.053 43.624 267.357 46.216C269.661 48.808 272.685 50.104 276.429 50.104C279.309 50.104 281.709 49.432 283.629 48.088C285.549 46.744 286.869 44.824 287.589 42.328H294.645C293.589 46.36 291.477 49.6 288.309 52.048C285.141 54.448 281.181 55.648 276.429 55.648C272.685 55.648 269.349 54.808 266.421 53.128C263.541 51.448 261.285 49.072 259.653 46C258.021 42.928 257.205 39.328 257.205 35.2Z" />
            <path d="M325.42 55L309.94 37.576V55H303.388V1.72H309.94V33.04L325.132 15.544H334.276L315.7 35.2L334.348 55H325.42Z" />
            <path d="M375.262 4.816C380.734 4.816 385.462 5.848 389.446 7.912C393.478 9.928 396.55 12.832 398.662 16.624C400.822 20.416 401.902 24.88 401.902 30.016C401.902 35.152 400.822 39.616 398.662 43.408C396.55 47.152 393.478 50.032 389.446 52.048C385.462 54.016 380.734 55 375.262 55H359.638V4.816H375.262ZM375.262 49.6C381.742 49.6 386.686 47.896 390.094 44.488C393.502 41.032 395.206 36.208 395.206 30.016C395.206 23.776 393.478 18.904 390.022 15.4C386.614 11.896 381.694 10.144 375.262 10.144H366.19V49.6H375.262Z" />
            <path d="M446.544 33.76C446.544 35.008 446.472 36.328 446.328 37.72H414.792C415.032 41.608 416.352 44.656 418.752 46.864C421.2 49.024 424.152 50.104 427.608 50.104C430.44 50.104 432.792 49.456 434.664 48.16C436.584 46.816 437.928 45.04 438.696 42.832H445.752C444.696 46.624 442.584 49.72 439.416 52.12C436.248 54.472 432.312 55.648 427.608 55.648C423.864 55.648 420.504 54.808 417.528 53.128C414.6 51.448 412.296 49.072 410.616 46C408.936 42.88 408.096 39.28 408.096 35.2C408.096 31.12 408.912 27.544 410.544 24.472C412.176 21.4 414.456 19.048 417.384 17.416C420.36 15.736 423.768 14.896 427.608 14.896C431.352 14.896 434.664 15.712 437.544 17.344C440.424 18.976 442.632 21.232 444.168 24.112C445.752 26.944 446.544 30.16 446.544 33.76ZM439.776 32.392C439.776 29.896 439.224 27.76 438.12 25.984C437.016 24.16 435.504 22.792 433.584 21.88C431.712 20.92 429.624 20.44 427.32 20.44C424.008 20.44 421.176 21.496 418.824 23.608C416.52 25.72 415.2 28.648 414.864 32.392H439.776Z" />
            <path d="M469.88 48.952L482.12 15.544H489.104L473.624 55H465.992L450.512 15.544H457.568L469.88 48.952Z" />
            <path d="M531.552 33.76C531.552 35.008 531.48 36.328 531.336 37.72H499.8C500.04 41.608 501.36 44.656 503.76 46.864C506.208 49.024 509.16 50.104 512.616 50.104C515.448 50.104 517.8 49.456 519.672 48.16C521.592 46.816 522.936 45.04 523.704 42.832H530.76C529.704 46.624 527.592 49.72 524.424 52.12C521.256 54.472 517.32 55.648 512.616 55.648C508.872 55.648 505.512 54.808 502.536 53.128C499.608 51.448 497.304 49.072 495.624 46C493.944 42.88 493.104 39.28 493.104 35.2C493.104 31.12 493.92 27.544 495.552 24.472C497.184 21.4 499.464 19.048 502.392 17.416C505.368 15.736 508.776 14.896 512.616 14.896C516.36 14.896 519.672 15.712 522.552 17.344C525.432 18.976 527.64 21.232 529.176 24.112C530.76 26.944 531.552 30.16 531.552 33.76ZM524.784 32.392C524.784 29.896 524.232 27.76 523.128 25.984C522.024 24.16 520.512 22.792 518.592 21.88C516.72 20.92 514.632 20.44 512.328 20.44C509.016 20.44 506.184 21.496 503.832 23.608C501.528 25.72 500.208 28.648 499.872 32.392H524.784Z" />
            <path d="M546.752 1.72V55H540.2V1.72H546.752Z" />
            <path d="M575.127 55.648C571.431 55.648 568.071 54.808 565.047 53.128C562.071 51.448 559.719 49.072 557.991 46C556.311 42.88 555.471 39.28 555.471 35.2C555.471 31.168 556.335 27.616 558.063 24.544C559.839 21.424 562.239 19.048 565.263 17.416C568.287 15.736 571.671 14.896 575.415 14.896C579.159 14.896 582.543 15.736 585.567 17.416C588.591 19.048 590.967 21.4 592.695 24.472C594.471 27.544 595.359 31.12 595.359 35.2C595.359 39.28 594.447 42.88 592.623 46C590.847 49.072 588.423 51.448 585.351 53.128C582.279 54.808 578.871 55.648 575.127 55.648ZM575.127 49.888C577.479 49.888 579.687 49.336 581.751 48.232C583.815 47.128 585.471 45.472 586.719 43.264C588.015 41.056 588.663 38.368 588.663 35.2C588.663 32.032 588.039 29.344 586.791 27.136C585.543 24.928 583.911 23.296 581.895 22.24C579.879 21.136 577.695 20.584 575.343 20.584C572.943 20.584 570.735 21.136 568.719 22.24C566.751 23.296 565.167 24.928 563.967 27.136C562.767 29.344 562.167 32.032 562.167 35.2C562.167 38.416 562.743 41.128 563.895 43.336C565.095 45.544 566.679 47.2 568.647 48.304C570.615 49.36 572.775 49.888 575.127 49.888Z" />
            <path d="M610.526 22.816C611.822 20.56 613.742 18.688 616.286 17.2C618.878 15.664 621.878 14.896 625.286 14.896C628.79 14.896 631.958 15.736 634.79 17.416C637.67 19.096 639.926 21.472 641.558 24.544C643.19 27.568 644.006 31.096 644.006 35.128C644.006 39.112 643.19 42.664 641.558 45.784C639.926 48.904 637.67 51.328 634.79 53.056C631.958 54.784 628.79 55.648 625.286 55.648C621.926 55.648 618.95 54.904 616.358 53.416C613.814 51.88 611.87 49.984 610.526 47.728V73.72H603.974V15.544H610.526V22.816ZM637.31 35.128C637.31 32.152 636.71 29.56 635.51 27.352C634.31 25.144 632.678 23.464 630.614 22.312C628.598 21.16 626.366 20.584 623.918 20.584C621.518 20.584 619.286 21.184 617.222 22.384C615.206 23.536 613.574 25.24 612.326 27.496C611.126 29.704 610.526 32.272 610.526 35.2C610.526 38.176 611.126 40.792 612.326 43.048C613.574 45.256 615.206 46.96 617.222 48.16C619.286 49.312 621.518 49.888 623.918 49.888C626.366 49.888 628.598 49.312 630.614 48.16C632.678 46.96 634.31 45.256 635.51 43.048C636.71 40.792 637.31 38.152 637.31 35.128Z" />
            <path d="M688.63 33.76C688.63 35.008 688.558 36.328 688.414 37.72H656.878C657.118 41.608 658.438 44.656 660.838 46.864C663.286 49.024 666.238 50.104 669.694 50.104C672.526 50.104 674.878 49.456 676.75 48.16C678.67 46.816 680.014 45.04 680.782 42.832H687.838C686.782 46.624 684.67 49.72 681.502 52.12C678.334 54.472 674.398 55.648 669.694 55.648C665.95 55.648 662.59 54.808 659.614 53.128C656.686 51.448 654.382 49.072 652.702 46C651.022 42.88 650.182 39.28 650.182 35.2C650.182 31.12 650.998 27.544 652.63 24.472C654.262 21.4 656.542 19.048 659.47 17.416C662.446 15.736 665.854 14.896 669.694 14.896C673.438 14.896 676.75 15.712 679.63 17.344C682.51 18.976 684.718 21.232 686.254 24.112C687.838 26.944 688.63 30.16 688.63 33.76ZM681.862 32.392C681.862 29.896 681.31 27.76 680.206 25.984C679.102 24.16 677.59 22.792 675.67 21.88C673.798 20.92 671.71 20.44 669.406 20.44C666.094 20.44 663.262 21.496 660.91 23.608C658.606 25.72 657.286 28.648 656.95 32.392H681.862Z" />
            <path d="M703.83 21.952C704.982 19.696 706.614 17.944 708.726 16.696C710.886 15.448 713.502 14.824 716.574 14.824V21.592H714.846C707.502 21.592 703.83 25.576 703.83 33.544V55H697.278V15.544H703.83V21.952Z" />
          </mask>
          <path d="M33.912 4.816V10.144H12.096V27.064H29.808V32.392H12.096V55H5.54401V4.816H33.912Z" stroke="white" strokeWidth={2} mask="url(#path-1-outside-1)" />
          <path d="M76.8173 15.544V55H70.2653V49.168C69.0173 51.184 67.2653 52.768 65.0093 53.92C62.8013 55.024 60.3533 55.576 57.6653 55.576C54.5933 55.576 51.8333 54.952 49.3853 53.704C46.9373 52.408 44.9933 50.488 43.5533 47.944C42.1613 45.4 41.4653 42.304 41.4653 38.656V15.544H47.9453V37.792C47.9453 41.68 48.9293 44.68 50.8973 46.792C52.8653 48.856 55.5533 49.888 58.9613 49.888C62.4653 49.888 65.2253 48.808 67.2413 46.648C69.2573 44.488 70.2653 41.344 70.2653 37.216V15.544H76.8173Z" stroke="white" strokeWidth={2} mask="url(#path-1-outside-1)" />
          <path d="M94.4319 1.72V55H87.8799V1.72H94.4319Z" stroke="white" strokeWidth={2} mask="url(#path-1-outside-1)" />
          <path d="M112.151 1.72V55H105.599V1.72H112.151Z" stroke="white" strokeWidth={2} mask="url(#path-1-outside-1)" />
          <path d="M158.425 55.504C155.113 55.504 152.137 54.928 149.497 53.776C146.905 52.576 144.865 50.944 143.377 48.88C141.889 46.768 141.121 44.344 141.073 41.608H148.057C148.297 43.96 149.257 45.952 150.937 47.584C152.665 49.168 155.161 49.96 158.425 49.96C161.545 49.96 163.993 49.192 165.769 47.656C167.593 46.072 168.505 44.056 168.505 41.608C168.505 39.688 167.977 38.128 166.921 36.928C165.865 35.728 164.545 34.816 162.961 34.192C161.377 33.568 159.241 32.896 156.553 32.176C153.241 31.312 150.577 30.448 148.561 29.584C146.593 28.72 144.889 27.376 143.449 25.552C142.057 23.68 141.361 21.184 141.361 18.064C141.361 15.328 142.057 12.904 143.449 10.792C144.841 8.68 146.785 7.048 149.281 5.896C151.825 4.744 154.729 4.168 157.993 4.168C162.697 4.168 166.537 5.344 169.513 7.696C172.537 10.048 174.241 13.168 174.625 17.056H167.425C167.185 15.136 166.177 13.456 164.401 12.016C162.625 10.528 160.273 9.784 157.345 9.784C154.609 9.784 152.377 10.504 150.649 11.944C148.921 13.336 148.057 15.304 148.057 17.848C148.057 19.672 148.561 21.16 149.569 22.312C150.625 23.464 151.897 24.352 153.385 24.976C154.921 25.552 157.057 26.224 159.793 26.992C163.105 27.904 165.769 28.816 167.785 29.728C169.801 30.592 171.529 31.96 172.969 33.832C174.409 35.656 175.129 38.152 175.129 41.32C175.129 43.768 174.481 46.072 173.185 48.232C171.889 50.392 169.969 52.144 167.425 53.488C164.881 54.832 161.881 55.504 158.425 55.504Z" stroke="white" strokeWidth={2} mask="url(#path-1-outside-1)" />
          <path d="M192.763 20.944V44.2C192.763 46.12 193.171 47.488 193.987 48.304C194.803 49.072 196.219 49.456 198.235 49.456H203.059V55H197.155C193.507 55 190.771 54.16 188.947 52.48C187.123 50.8 186.211 48.04 186.211 44.2V20.944H181.099V15.544H186.211V5.608H192.763V15.544H203.059V20.944H192.763Z" stroke="white" strokeWidth={2} mask="url(#path-1-outside-1)" />
          <path d="M208.549 35.128C208.549 31.096 209.365 27.568 210.997 24.544C212.629 21.472 214.861 19.096 217.693 17.416C220.573 15.736 223.765 14.896 227.269 14.896C230.725 14.896 233.725 15.64 236.269 17.128C238.813 18.616 240.709 20.488 241.957 22.744V15.544H248.581V55H241.957V47.656C240.661 49.96 238.717 51.88 236.125 53.416C233.581 54.904 230.605 55.648 227.197 55.648C223.693 55.648 220.525 54.784 217.693 53.056C214.861 51.328 212.629 48.904 210.997 45.784C209.365 42.664 208.549 39.112 208.549 35.128ZM241.957 35.2C241.957 32.224 241.357 29.632 240.157 27.424C238.957 25.216 237.325 23.536 235.261 22.384C233.245 21.184 231.013 20.584 228.565 20.584C226.117 20.584 223.885 21.16 221.869 22.312C219.853 23.464 218.245 25.144 217.045 27.352C215.845 29.56 215.245 32.152 215.245 35.128C215.245 38.152 215.845 40.792 217.045 43.048C218.245 45.256 219.853 46.96 221.869 48.16C223.885 49.312 226.117 49.888 228.565 49.888C231.013 49.888 233.245 49.312 235.261 48.16C237.325 46.96 238.957 45.256 240.157 43.048C241.357 40.792 241.957 38.176 241.957 35.2Z" stroke="white" strokeWidth={2} mask="url(#path-1-outside-1)" />
          <path d="M257.205 35.2C257.205 31.12 258.021 27.568 259.653 24.544C261.285 21.472 263.541 19.096 266.421 17.416C269.349 15.736 272.685 14.896 276.429 14.896C281.277 14.896 285.261 16.072 288.381 18.424C291.549 20.776 293.637 24.04 294.645 28.216H287.589C286.917 25.816 285.597 23.92 283.629 22.528C281.709 21.136 279.309 20.44 276.429 20.44C272.685 20.44 269.661 21.736 267.357 24.328C265.053 26.872 263.901 30.496 263.901 35.2C263.901 39.952 265.053 43.624 267.357 46.216C269.661 48.808 272.685 50.104 276.429 50.104C279.309 50.104 281.709 49.432 283.629 48.088C285.549 46.744 286.869 44.824 287.589 42.328H294.645C293.589 46.36 291.477 49.6 288.309 52.048C285.141 54.448 281.181 55.648 276.429 55.648C272.685 55.648 269.349 54.808 266.421 53.128C263.541 51.448 261.285 49.072 259.653 46C258.021 42.928 257.205 39.328 257.205 35.2Z" stroke="white" strokeWidth={2} mask="url(#path-1-outside-1)" />
          <path d="M325.42 55L309.94 37.576V55H303.388V1.72H309.94V33.04L325.132 15.544H334.276L315.7 35.2L334.348 55H325.42Z" stroke="white" strokeWidth={2} mask="url(#path-1-outside-1)" />
          <path d="M375.262 4.816C380.734 4.816 385.462 5.848 389.446 7.912C393.478 9.928 396.55 12.832 398.662 16.624C400.822 20.416 401.902 24.88 401.902 30.016C401.902 35.152 400.822 39.616 398.662 43.408C396.55 47.152 393.478 50.032 389.446 52.048C385.462 54.016 380.734 55 375.262 55H359.638V4.816H375.262ZM375.262 49.6C381.742 49.6 386.686 47.896 390.094 44.488C393.502 41.032 395.206 36.208 395.206 30.016C395.206 23.776 393.478 18.904 390.022 15.4C386.614 11.896 381.694 10.144 375.262 10.144H366.19V49.6H375.262Z" stroke="white" strokeWidth={2} mask="url(#path-1-outside-1)" />
          <path d="M446.544 33.76C446.544 35.008 446.472 36.328 446.328 37.72H414.792C415.032 41.608 416.352 44.656 418.752 46.864C421.2 49.024 424.152 50.104 427.608 50.104C430.44 50.104 432.792 49.456 434.664 48.16C436.584 46.816 437.928 45.04 438.696 42.832H445.752C444.696 46.624 442.584 49.72 439.416 52.12C436.248 54.472 432.312 55.648 427.608 55.648C423.864 55.648 420.504 54.808 417.528 53.128C414.6 51.448 412.296 49.072 410.616 46C408.936 42.88 408.096 39.28 408.096 35.2C408.096 31.12 408.912 27.544 410.544 24.472C412.176 21.4 414.456 19.048 417.384 17.416C420.36 15.736 423.768 14.896 427.608 14.896C431.352 14.896 434.664 15.712 437.544 17.344C440.424 18.976 442.632 21.232 444.168 24.112C445.752 26.944 446.544 30.16 446.544 33.76ZM439.776 32.392C439.776 29.896 439.224 27.76 438.12 25.984C437.016 24.16 435.504 22.792 433.584 21.88C431.712 20.92 429.624 20.44 427.32 20.44C424.008 20.44 421.176 21.496 418.824 23.608C416.52 25.72 415.2 28.648 414.864 32.392H439.776Z" stroke="white" strokeWidth={2} mask="url(#path-1-outside-1)" />
          <path d="M469.88 48.952L482.12 15.544H489.104L473.624 55H465.992L450.512 15.544H457.568L469.88 48.952Z" stroke="white" strokeWidth={2} mask="url(#path-1-outside-1)" />
          <path d="M531.552 33.76C531.552 35.008 531.48 36.328 531.336 37.72H499.8C500.04 41.608 501.36 44.656 503.76 46.864C506.208 49.024 509.16 50.104 512.616 50.104C515.448 50.104 517.8 49.456 519.672 48.16C521.592 46.816 522.936 45.04 523.704 42.832H530.76C529.704 46.624 527.592 49.72 524.424 52.12C521.256 54.472 517.32 55.648 512.616 55.648C508.872 55.648 505.512 54.808 502.536 53.128C499.608 51.448 497.304 49.072 495.624 46C493.944 42.88 493.104 39.28 493.104 35.2C493.104 31.12 493.92 27.544 495.552 24.472C497.184 21.4 499.464 19.048 502.392 17.416C505.368 15.736 508.776 14.896 512.616 14.896C516.36 14.896 519.672 15.712 522.552 17.344C525.432 18.976 527.64 21.232 529.176 24.112C530.76 26.944 531.552 30.16 531.552 33.76ZM524.784 32.392C524.784 29.896 524.232 27.76 523.128 25.984C522.024 24.16 520.512 22.792 518.592 21.88C516.72 20.92 514.632 20.44 512.328 20.44C509.016 20.44 506.184 21.496 503.832 23.608C501.528 25.72 500.208 28.648 499.872 32.392H524.784Z" stroke="white" strokeWidth={2} mask="url(#path-1-outside-1)" />
          <path d="M546.752 1.72V55H540.2V1.72H546.752Z" stroke="white" strokeWidth={2} mask="url(#path-1-outside-1)" />
          <path d="M575.127 55.648C571.431 55.648 568.071 54.808 565.047 53.128C562.071 51.448 559.719 49.072 557.991 46C556.311 42.88 555.471 39.28 555.471 35.2C555.471 31.168 556.335 27.616 558.063 24.544C559.839 21.424 562.239 19.048 565.263 17.416C568.287 15.736 571.671 14.896 575.415 14.896C579.159 14.896 582.543 15.736 585.567 17.416C588.591 19.048 590.967 21.4 592.695 24.472C594.471 27.544 595.359 31.12 595.359 35.2C595.359 39.28 594.447 42.88 592.623 46C590.847 49.072 588.423 51.448 585.351 53.128C582.279 54.808 578.871 55.648 575.127 55.648ZM575.127 49.888C577.479 49.888 579.687 49.336 581.751 48.232C583.815 47.128 585.471 45.472 586.719 43.264C588.015 41.056 588.663 38.368 588.663 35.2C588.663 32.032 588.039 29.344 586.791 27.136C585.543 24.928 583.911 23.296 581.895 22.24C579.879 21.136 577.695 20.584 575.343 20.584C572.943 20.584 570.735 21.136 568.719 22.24C566.751 23.296 565.167 24.928 563.967 27.136C562.767 29.344 562.167 32.032 562.167 35.2C562.167 38.416 562.743 41.128 563.895 43.336C565.095 45.544 566.679 47.2 568.647 48.304C570.615 49.36 572.775 49.888 575.127 49.888Z" stroke="white" strokeWidth={2} mask="url(#path-1-outside-1)" />
          <path d="M610.526 22.816C611.822 20.56 613.742 18.688 616.286 17.2C618.878 15.664 621.878 14.896 625.286 14.896C628.79 14.896 631.958 15.736 634.79 17.416C637.67 19.096 639.926 21.472 641.558 24.544C643.19 27.568 644.006 31.096 644.006 35.128C644.006 39.112 643.19 42.664 641.558 45.784C639.926 48.904 637.67 51.328 634.79 53.056C631.958 54.784 628.79 55.648 625.286 55.648C621.926 55.648 618.95 54.904 616.358 53.416C613.814 51.88 611.87 49.984 610.526 47.728V73.72H603.974V15.544H610.526V22.816ZM637.31 35.128C637.31 32.152 636.71 29.56 635.51 27.352C634.31 25.144 632.678 23.464 630.614 22.312C628.598 21.16 626.366 20.584 623.918 20.584C621.518 20.584 619.286 21.184 617.222 22.384C615.206 23.536 613.574 25.24 612.326 27.496C611.126 29.704 610.526 32.272 610.526 35.2C610.526 38.176 611.126 40.792 612.326 43.048C613.574 45.256 615.206 46.96 617.222 48.16C619.286 49.312 621.518 49.888 623.918 49.888C626.366 49.888 628.598 49.312 630.614 48.16C632.678 46.96 634.31 45.256 635.51 43.048C636.71 40.792 637.31 38.152 637.31 35.128Z" stroke="white" strokeWidth={2} mask="url(#path-1-outside-1)" />
          <path d="M688.63 33.76C688.63 35.008 688.558 36.328 688.414 37.72H656.878C657.118 41.608 658.438 44.656 660.838 46.864C663.286 49.024 666.238 50.104 669.694 50.104C672.526 50.104 674.878 49.456 676.75 48.16C678.67 46.816 680.014 45.04 680.782 42.832H687.838C686.782 46.624 684.67 49.72 681.502 52.12C678.334 54.472 674.398 55.648 669.694 55.648C665.95 55.648 662.59 54.808 659.614 53.128C656.686 51.448 654.382 49.072 652.702 46C651.022 42.88 650.182 39.28 650.182 35.2C650.182 31.12 650.998 27.544 652.63 24.472C654.262 21.4 656.542 19.048 659.47 17.416C662.446 15.736 665.854 14.896 669.694 14.896C673.438 14.896 676.75 15.712 679.63 17.344C682.51 18.976 684.718 21.232 686.254 24.112C687.838 26.944 688.63 30.16 688.63 33.76ZM681.862 32.392C681.862 29.896 681.31 27.76 680.206 25.984C679.102 24.16 677.59 22.792 675.67 21.88C673.798 20.92 671.71 20.44 669.406 20.44C666.094 20.44 663.262 21.496 660.91 23.608C658.606 25.72 657.286 28.648 656.95 32.392H681.862Z" stroke="white" strokeWidth={2} mask="url(#path-1-outside-1)" />
          <path d="M703.83 21.952C704.982 19.696 706.614 17.944 708.726 16.696C710.886 15.448 713.502 14.824 716.574 14.824V21.592H714.846C707.502 21.592 703.83 25.576 703.83 33.544V55H697.278V15.544H703.83V21.952Z" stroke="white" strokeWidth={2} mask="url(#path-1-outside-1)" />
        </g>
        <defs>
          <filter id="filter0_d" x="0.544006" y="0.720001" width="721.03" height={82} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy={4} />
            <feGaussianBlur stdDeviation={2} />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        </defs>
      </svg>
</div>
   </div>
)
}

export default Title;