import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'yimcipe-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
}
