import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
    selector: 'app-single-episode-page',
    templateUrl: './single-episode-page.component.html',
    styleUrls: ['./single-episode-page.component.scss']
})
export class SingleEpisodePageComponent implements OnInit {

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
            link: 'assets/audio/song.mp3',
            artist: 'Episode 01'
        },
        {
            title: 'How to Effectively Incentivize Team Members',
            link: 'assets/audio/song2.mp3',
            artist: 'Episode 02'
        },
        {
            title: 'How to go from Start-Up to Scale-Up',
            link: 'assets/audio/song.mp3',
            artist: 'Episode 03'
        },
        {
            title: `Tube Preamps, TLM103 vs. OJ 818, Podcastage's Beanies`,
            link: 'assets/audio/song2.mp3',
            artist: 'Episode 04'
        },
        {
            title: 'Ask Unladylike: Late Bloomer with Forever35',
            link: 'assets/audio/song.mp3',
            artist: 'Episode 05'
        }
    ];

}