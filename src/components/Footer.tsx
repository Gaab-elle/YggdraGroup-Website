import { 
    Mail, 
    MessageCircle, 
    MapPin, 
    ArrowUp, 
    Heart,
    Code,
    Shield,
    Users,
    Github,
    Instagram,
    Facebook
  } from "lucide-react";
  
  const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    const services = [
      { name: "Desenvolvimento de Sistemas", icon: Code },
      { name: "Manutenção de Redes", icon: Shield },
      { name: "Consultoria em TI", icon: Users },
      { name: "Segurança Digital", icon: Shield }
    ];
  
    const contactInfo = [
      {
        icon: Mail,
        label: "Email",
        value: "yggdratech@gmail.com",
        link: "mailto:yggdratech@gmail.com"
      },
      {
        icon: MessageCircle,
        label: "WhatsApp",
        value: "(91) 996374963",
        link: "https://wa.me/5591996374963"
      },
      {
        icon: MapPin,
        label: "Endereço",
        value: "Belém, Pará - Brasil",
        link: "https://maps.google.com/?q=Belém,+Pará,+Brasil"
      }
    ];
  
    const socialLinks = [
      {
        name: "Instagram",
        icon: Instagram,
        url: "https://instagram.com/yggdratech",
        color: "hover:text-pink-400"
      },
      {
        name: "Facebook",
        icon: Facebook,
        url: "https://facebook.com/yggdratech",
        color: "hover:text-blue-500"
      },
      {
        name: "GitHub",
        icon: Github,
        url: "https://github.com/yggdratech",
        color: "hover:text-gray-400"
      }
    ];
  
    const quickLinks = [
      { name: "Início", href: "#home" },
      { name: "Serviços", href: "#services" },
      { name: "Sobre Nós", href: "#about" },
      { name: "Contato", href: "#contact" }
    ];
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    const scrollToSection = (href: string) => {
      if (href.startsWith('#')) {
        const element = document.getElementById(href.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
  
    return (
      <>
        <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
  
          <div className="container mx-auto px-4 py-16 relative z-10">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              
              {/* Company Info */}
              <div className="lg:col-span-1 space-y-6">
                <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('#home')}>
                  <img 
                    src="/Yggdratech-logo.png" 
                    alt="Yggdra Group" 
                    className="h-12 w-auto group-hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      Yggdra Group
                    </span>
                    <div className="text-xs text-slate-400 font-medium tracking-wider">
                      SOLUÇÕES EM TECNOLOGIA
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-300 leading-relaxed">
                  Transformamos desafios tecnológicos em oportunidades de crescimento, 
                  oferecendo soluções inovadoras e personalizadas para seu negócio.
                </p>
              </div>
  
              {/* Quick Links */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  Links Rápidos
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-slate-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
  
              {/* Services */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  Serviços
                </h3>
                <ul className="space-y-3">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <li key={service.name} className="flex items-center group">
                        <Icon className="w-4 h-4 mr-3 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
                        <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                          {service.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
  
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  Contato
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((contact) => {
                    const Icon = contact.icon;
                    return (
                      <a
                        key={contact.label}
                        href={contact.link}
                        className="flex items-start space-x-3 group hover:bg-slate-800/50 p-3 rounded-lg transition-all duration-300"
                        target={contact.link.startsWith('http') ? '_blank' : '_self'}
                        rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        <Icon className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors duration-300 mt-0.5" />
                        <div>
                          <div className="text-sm text-slate-400">{contact.label}</div>
                          <div className="text-slate-300 group-hover:text-white transition-colors duration-300">
                            {contact.value}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
  
            {/* Social Links */}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-slate-700">
              <div className="flex items-center space-x-6 mb-4 sm:mb-0">
                <span className="text-slate-400 text-sm">Siga-nos:</span>
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 bg-slate-800 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                      title={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
  
              {/* Copyright */}
              <div className="text-center sm:text-right">
                <p className="text-slate-400 text-sm flex items-center justify-center sm:justify-end">
                  &copy; {currentYear} Yggdra Group. Feito com{" "}
                  <Heart className="w-4 h-4 mx-1 text-red-400 animate-pulse" />
                  em Belém, PA
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Todos os direitos reservados.
                </p>
              </div>
            </div>
          </div>
  
          {/* Decorative Bottom Border */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600"></div>
        </footer>
  
        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-3 rounded-full shadow-2xl shadow-blue-500/25 transition-all duration-300 transform hover:scale-110"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </>
    );
  };
  
  export default Footer;