import { Route, Switch } from "wouter";
import Home from "@/pages/Home";
import WhyChooseUs from "@/pages/WhyChooseUs";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import Testimonials from "@/pages/Testimonials";
import Contact from "@/pages/Contact";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RedBanner } from "@/components/layout/RedBanner";
import NotFound from "@/pages/not-found";
import { Toaster } from "@/components/ui/toaster";
import ServiceDetail from '@/pages/ServiceDetail'; // Added import

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/why-choose-us" component={WhyChooseUs} />
          <Route path="/services" component={Services} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} /> {/* Added route for service details */}
          <Route path="/projects" component={Projects} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/contact-us" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <RedBanner />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;