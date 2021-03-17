import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-qrcode-details',
  templateUrl: './qrcode-details.page.html',
  styleUrls: ['./qrcode-details.page.scss'],
})
export class QrcodeDetailsPage implements OnInit {

  scannedCode = null;

  constructor( private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

  scanCode()
  {
    this.barcodeScanner.scan().then(BarcodeData => {

      this.scannedCode = BarcodeData.text;
    });
  }

}
