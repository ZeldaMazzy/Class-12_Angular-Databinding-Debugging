import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BookshelfService } from './bookshelf.service';
import { Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/directives/placeholder/placeholder.directive';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit, OnDestroy {
  private bookSelected$: Subscription = new Subscription();
  @ViewChild(PlaceholderDirective) alertHost: any;
  private modalCloseSub: Subscription;

  constructor(
    private service: BookshelfService, 
    private factory: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
      this.bookSelected$ = this.service.bookSelected
        .subscribe({
          next: book => {
            const alertMsg = `Successfully removed ${book.title} from your personal library.`;
            this.displayBookRemovalAlert(alertMsg);
          }
        })
  }

  ngOnDestroy(): void {
      this.bookSelected$.unsubscribe();
  }

  displayBookRemovalAlert(msg: string) {
    const alertCmpFactory = this.factory.resolveComponentFactory(
      AlertComponent
    );

    // Access View Container and Clear it
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    // Create new Alert Component Instance and Set the Message from Arguments
    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
    componentRef.instance.message = msg;

    // Clear Alert Method
    const clearAlert = () => {
      this.modalCloseSub.unsubscribe();
      hostViewContainerRef.clear();
    };

    // Close the Modal and Clear the Alert
    this.modalCloseSub = componentRef.instance.closeModal.subscribe(() => {
      clearAlert();
    });

    // Close Modal and Clear Alert after 3 seconds
    setTimeout(() => {
      if (this.modalCloseSub) clearAlert();
    }, 4000);
  }
}