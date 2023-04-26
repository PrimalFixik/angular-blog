import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {IAppState} from "../../core/store/state/app.state";
import {Observable} from "rxjs";
import {IPost} from "../../core/interfaces/IPost";
import {selectPosts} from "../../core/store/selectors/posts.selector";
import {LoadPostsList} from "../../core/store/actions/posts.actions";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit, OnDestroy{
  postsSubscription: any;
  posts$: Observable<Array<IPost>> = this.store.pipe(select(selectPosts));

  constructor(private readonly store: Store<IAppState>, private readonly cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.postsSubscription = this.posts$.subscribe(posts => {
      console.log(posts);
    });
    this.store.dispatch(new LoadPostsList());
  }

  ngOnDestroy(): void {
    this.postsSubscription.unsubscribe();
  }
}
