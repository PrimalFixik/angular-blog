import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {IAppState} from "../../core/store/state/app.state";
import {Observable, Subscription} from "rxjs";
import {IPost} from "../../core/interfaces/IPost";
import {selectLoadPostInProgress, selectPost} from "../../core/store/selectors/post.selector";
import {LoadPost} from "../../core/store/actions/post.actions";
import {selectLoadUserInProgress, selectUser} from "../../core/store/selectors/user.selector";
import {IUser} from "../../core/interfaces/IUser";
import {LoadUser} from "../../core/store/actions/user.actions";
import {selectLoadCommentsInProgress} from "../../core/store/selectors/comments.selector";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit, OnDestroy {
  routeSubscription: Subscription;
  postSubsctiption: Subscription;

  post$: Observable<IPost | null> = this.store.pipe(select(selectPost));
  user$: Observable<IUser | null> = this.store.pipe(select(selectUser));


  constructor(
    private route: ActivatedRoute,
    private readonly store: Store<IAppState>,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.store.dispatch(new LoadPost(Number(params['id'])));
    })

    this.postSubsctiption = this.post$.subscribe(post => {
      if (post) {
        this.store.dispatch(new LoadUser(Number(post?.userId)));
      }
    })
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.postSubsctiption.unsubscribe();
  }
}
