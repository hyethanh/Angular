import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Location } from '@angular/common';
import { Book } from '../book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  @Input() book: Book;

  constructor(
    private router: ActivatedRoute,
    private bookService: BookService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getBook();
  }

  getBook(): void {
    const id = +this.router.snapshot.paramMap.get('id');
    this.bookService.getBook(id).subscribe(book => this.book = book);
  }

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   this.bookService.updateBook(this.book).subscribe(() => this.goBack());
  // }
}
