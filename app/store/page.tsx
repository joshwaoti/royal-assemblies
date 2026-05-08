import { PageHero } from "@/components/page-hero";
import { books } from "@/lib/data";
import { BookCover } from "@/components/book-cover";

export default function StorePage() {
  return (
    <>
      <PageHero
        copy="The Bookshelf: Pastor Favour Adeola's verified titles with direct links to the Royal Assembly shop."
        eyebrow="Store"
        title={<>Pastor Favour&apos;s <em>Books</em></>}
      />
      <section className="section pt-0">
        <div className="container grid-auto">
          {books.map((book) => (
            <a className="no-underline" href={book.url} key={book.url}>
              <article className="royal-card overflow-hidden hover:border-gold">
                <BookCover book={book} large />
                <div className="p-5">
                  <span className="btn btn-ghost w-full">Open Shop Link</span>
                </div>
              </article>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
