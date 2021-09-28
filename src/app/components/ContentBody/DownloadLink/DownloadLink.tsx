import React from 'react';
import { isIOS } from 'react-device-detect';
import { isAndroid } from 'react-device-detect';
import styles from './DownloadLink.module.scss';


const DownloadLink: React.FC = () => { 
    if (isAndroid) {
        return (
            <a 
            href="https://play.google.com/store/apps/details?id=kz.laccent" 
            target="_blank" rel="noopener noreferrer"
            className={styles.downloadButton}
            >
                Download now
            </a>
        );
    }

    if(isIOS) {
        return (
            <a 
            href="https://apps.apple.com/kz/app/laccent/id1563932291" 
            target="_blank" rel="noopener noreferrer"
            className={styles.downloadButton}
            >
                Download now
            </a>
        );
    }

    return (
        <a 
        href='https://apps.apple.com/kz/app/laccent/id1563932291'
        target="_blank" rel="noopener noreferrer"
        className={styles.downloadButton}
        >
            Download now
        </a>
    )
}

export default DownloadLink;