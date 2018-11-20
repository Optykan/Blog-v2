import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'component-social',
    templateUrl: './social.component.html',
    styleUrls: ['./social.component.scss']
})

export class SocialComponent implements OnInit {
    @Input() theme: string = "light";
    @Input() align: string;

    links: Array<Link>
    constructor() {
        this.links = [
            {title: 'Github', url: 'https://github.com/Optykan'}, 
            {title: 'LinkedIn', url: 'https://linkedin.com/in/Optykan'},
            {title: 'Resume', url: '/assets/misc/[Release]%20Resume.pdf'},
            {title: 'Email', url: 'mailto:hello@syang.ca'}
        ]
    }

    ngOnInit() {
    }
}

interface Link {
    title: string;
    url: string;
}