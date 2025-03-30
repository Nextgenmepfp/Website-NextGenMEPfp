import { Route, Switch } from "wouter";
import Home from "@/pages/Home";
import WhyChooseUs from "@/pages/WhyChooseUs";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import Testimonials from "@/pages/Testimonials";
import Contact from "@/pages/Contact";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import NotFound from "@/pages/not-found";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/why-choose-us" component={WhyChooseUs} />
          <Route path="/services" component={Services} />
          <Route path="/projects" component={Projects} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
