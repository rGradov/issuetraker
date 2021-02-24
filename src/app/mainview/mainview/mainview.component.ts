import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.scss']
})
export class MainviewComponent implements OnInit {
  searchString: string;

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    if (!this.auth.logIn) {
      this.router.navigate(['/login']);
    }
  }

}
