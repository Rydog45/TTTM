import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
    selector: 'app-single-season-page',
    templateUrl: './single-season-page.component.html',
    styleUrls: ['./single-season-page.component.scss']
})
export class SingleSeasonPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    msaapDisplayTitle = true;
    msaapDisplayPlayList = true;
    msaapPageSizeOptions = [2,4,6];
    msaapDisplayVolumeControls = true;
    msaapDisplayRepeatControls = true;
    msaapDisplayArtist = true;
    msaapDisplayDuration = false;
    msaapDisablePositionSlider = true;

    // Material Style Advance Audio Player Playlist
    msaapPlaylist: Track[] = [
        {
            title: 'Finding Moments Of Joy In A Challenging Year',
            link: 'assets/audio/song.mp3'
        }
    ];
    msaapPlaylist2: Track[] = [
        {
            title: 'How to Effectively Incentivize Team Members',
            link: 'assets/audio/song2.mp3'
        }
    ];
    msaapPlaylist3: Track[] = [
        {
            title: 'How to go from Start-Up to Scale-Up',
            link: 'assets/audio/song.mp3'
        }
    ];
    msaapPlaylist4: Track[] = [
        {
            title: `Tube Preamps, TLM103 vs. OJ 818, Podcastage's Beanies`,
            link: 'assets/audio/song2.mp3'
        }
    ];
    msaapPlaylist5: Track[] = [
        {
            title: 'Ask Unladylike: Late Bloomer with Forever35',
            link: 'assets/audio/song.mp3'
        }
    ];

}