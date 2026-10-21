import { liteClient as algoliasearch } from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Highlight, RefinementList } from 'react-instantsearch';

const searchClient = algoliasearch('GREHOJC5LW', '7b7d9eafcb3796e3d3c2ffb339b2abbb');


export default function SearchPage() {
  return (
    <InstantSearch searchClient={searchClient} indexName="myindex">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-3">
          <RefinementList attribute="category" />
        </div>
        <div className="lg:col-span-9 space-y-4">
          <SearchBox />
          <Hits hitComponent={Hit} />
        </div>
      </div>
    </InstantSearch>
  );
}

function Hit({ hit }: { hit: any }) {
  return (
    <div className="p-4 border border-slate-800 rounded-xl bg-slate-900">
      <h4 className="font-semibold text-white">
        <Highlight attribute="productName" hit={hit} />
      </h4>
      <p className="text-sm text-slate-400">
        <Highlight attribute="overview" hit={hit} />
      </p>
    </div>
  );
}