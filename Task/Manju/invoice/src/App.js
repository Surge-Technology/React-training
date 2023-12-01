import InvoiceForm from './components/InvoiceForm';
import Page from './check/Page';
import PageForm from './check/pageForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl">
       
        <PageForm/>
         <InvoiceForm />
      </div>
    </div>
  );
}

export default App;
