import React from 'react';
import { Box } from '@material-ui/core';
import useStyles from './styles/style.js';

const Blob = () => {
    const classes = useStyles();


    return (
        <Box className={classes.box}>
         <svg className={classes.blob} viewBox="0 -100 900 1000" width="1000" height="1000" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
          <defs>
            <linearGradient id='gradient' x1="30%" y1="30%" x2="100%" y2="80%">
              <stop offset="10%" style={{ stopColor: 'rgb(228, 88, 75)'}}/>
              <stop offset="100%" style={{ stopColor: 'rgb(255, 243, 126)'}}/>
            </linearGradient>
          </defs>
          <g transform="translate(445.76626365444315 258.3102586083848)">
          <path fill="url(#gradient)" cx="200" cy="170" rx="185" ry="155">
          <animate
          attributeName='d'
          dur='100s'
          repeatCount='indefinite'

          values='M166.2 -93.5C227.2 -56.1 296.4 13.6 292.3 80.7C288.1 147.8 210.7 212.2 134 231C57.3 249.9 -18.7 223.1 -97.1 189.9C-175.5 156.6 -256.4 116.8 -277.9 54.3C-299.4 -8.1 -261.5 -93.2 -205.3 -129.5C-149.1 -165.8 -74.5 -153.2 -10.9 -144.5C52.6 -135.7 105.3 -130.8 166.2 -93.5;
          
          M217.1 -166.9C246 -136.9 209.8 -48.6 173.2 10.7C136.7 70 99.8 100.3 45.3 146.9C-9.3 193.4 -81.4 256.2 -152.8 248.3C-224.3 240.4 -294.9 161.9 -287.7 94.1C-280.5 26.3 -195.4 -30.8 -134.4 -68.1C-73.5 -105.5 -36.7 -123.1 28.7 -145.9C94.1 -168.8 188.2 -196.9 217.1 -166.9;

          M104.5 -83.8C135.7 -44.2 161.4 -0.7 159.7 48.4C158.1 97.6 128.9 152.4 86.3 169C43.7 185.6 -12.4 164 -90 143.3C-167.6 122.7 -266.6 103.1 -298.9 44.4C-331.3 -14.2 -297 -111.8 -236.1 -158.3C-175.1 -204.7 -87.6 -199.8 -25.5 -179.5C36.7 -159.2 73.3 -123.5 104.5 -83.8;
          
          M141.7 -130.8C182.8 -61.5 214.7 -2.6 202.2 43.8C189.7 90.1 132.8 123.9 64.6 170.8C-3.6 217.7 -83.2 277.8 -118.7 256.7C-154.2 235.7 -145.6 133.5 -143.5 57.2C-141.4 -19 -145.8 -69.4 -122.9 -134.6C-100.1 -199.8 -50 -279.9 0.1 -280C50.3 -280.1 100.6 -200.2 141.7 -130.8;

          M139.6 -81.7C200.6 -34.9 283.1 24.2 279 72.4C275 120.5 184.3 157.6 103.9 184.2C23.4 210.8 -46.9 227 -108.5 205.1C-170.1 183.2 -223 123.1 -221.8 67.9C-220.6 12.8 -165.3 -37.5 -119.3 -80.8C-73.3 -124.1 -36.7 -160.6 1.4 -161.6C39.4 -162.7 78.7 -128.4 139.6 -81.7;

          M183.7 -163.8C227.8 -91.3 246 -15.5 222.6 36.2C199.1 88 134.1 115.6 70.4 146.4C6.7 177.2 -55.7 211.1 -118.4 198.9C-181 186.7 -244.1 128.4 -242.7 73C-241.4 17.5 -175.7 -35.1 -124.5 -109.3C-73.3 -183.5 -36.7 -279.2 16.6 -292.5C69.8 -305.7 139.7 -236.4 183.7 -163.8;

          M234.3 -170.7C273.1 -138.1 253.1 -42.5 221.9 33.3C190.8 109 148.5 164.9 99.5 177.1C50.5 189.4 -5.2 158.1 -55.1 128.6C-105 99.2 -149 71.6 -165.4 29.3C-181.9 -13 -170.7 -70.1 -138.5 -101.1C-106.3 -132.1 -53.2 -137.1 22.3 -154.8C97.7 -172.6 195.5 -203.2 234.3 -170.7;

          M233.8 -179.6C272.2 -138.4 251.1 -42.9 216.6 25.9C182.2 94.8 134.3 137 85.7 149.4C37.2 161.8 -11.9 144.2 -85.8 127.9C-159.6 111.6 -258.2 96.5 -291.2 41C-324.1 -14.5 -291.5 -110.4 -232 -156.5C-172.5 -202.6 -86.3 -198.8 5.7 -203.4C97.7 -207.9 195.5 -220.9 233.8 -179.6;

          M134.2 -91.4C195.2 -30.6 280.4 26.4 285.7 90.1C291 153.8 216.5 224.2 133.8 255.4C51.2 286.5 -39.5 278.4 -117.1 241.6C-194.7 204.8 -259.2 139.3 -256.8 78.9C-254.4 18.5 -185 -36.9 -131.1 -96C-77.1 -155.2 -38.6 -218.1 -1 -217.3C36.7 -216.6 73.3 -152.1 134.2 -91.4;

          M108.3 -123.5C131.2 -57.7 134.1 -13.2 125.2 29.6C116.3 72.5 95.5 113.7 48.7 158.1C2 202.4 -70.6 249.9 -143.9 237.9C-217.3 226 -291.5 154.7 -295.7 82.7C-300 10.7 -234.4 -62 -173.5 -136.4C-112.6 -210.8 -56.3 -286.9 -6.8 -281.5C42.7 -276.1 85.5 -189.2 108.3 -123.5;
          
          M166.2 -93.5C227.2 -56.1 296.4 13.6 292.3 80.7C288.1 147.8 210.7 212.2 134 231C57.3 249.9 -18.7 223.1 -97.1 189.9C-175.5 156.6 -256.4 116.8 -277.9 54.3C-299.4 -8.1 -261.5 -93.2 -205.3 -129.5C-149.1 -165.8 -74.5 -153.2 -10.9 -144.5C52.6 -135.7 105.3 -130.8 166.2 -93.5;'


        >
        </animate>
      </path>
      </g>
      </svg>
      </Box>
    )
}

export default Blob;