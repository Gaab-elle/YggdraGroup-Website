import { 
    Monitor, 
    Network, 
    Settings, 
    Cloud, 
    Shield, 
    Smartphone 
  } from "lucide-react";
  import { Card, CardContent } from "./ui/cards";
  
  const Services = () => {
    const services = [
      {
        icon: Monitor,
        title: "Desenvolvimento de Sistemas",
        description: "Criamos sistemas personalizados que atendem às necessidades específicas do seu negócio, utilizando as tecnologias mais modernas do mercado.",
        color: "from-blue-500 to-cyan-500"
      },
      {
        icon: Network,
        title: "Manutenção de Redes",
        description: "Garantimos que sua infraestrutura de rede funcione de forma eficiente e segura, com monitoramento 24/7 e suporte técnico especializado.",
        color: "from-green-500 to-emerald-500"
      },
      {
        icon: Settings,
        title: "Manutenção de Computadores",
        description: "Oferecemos serviços completos de manutenção preventiva e corretiva para manter seus equipamentos sempre em perfeito funcionamento.",
        color: "from-orange-500 to-red-500"
      },
      {
        icon: Cloud,
        title: "Consultoria em TI",
        description: "Nossa equipe experiente oferece consultoria estratégica para otimizar seus processos tecnológicos e aumentar a produtividade.",
        color: "from-purple-500 to-pink-500"
      },
      {
        icon: Shield,
        title: "Segurança Digital",
        description: "Protegemos seus dados e sistemas com soluções avançadas de segurança, garantindo a integridade de suas informações.",
        color: "from-red-500 to-orange-500"
      },
      {
        icon: Smartphone,
        title: "Desenvolvimento Mobile",
        description: "Criamos aplicativos mobile inovadores para Android e iOS, expandindo o alcance do seu negócio no mundo digital.",
        color: "from-indigo-500 to-purple-500"
      }
    ];
  
    return (
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
              <span className="text-sm font-medium text-blue-600">
                Nossos Serviços
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Soluções{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Tecnológicas
              </span>
              <br />
              para seu Negócio
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos um portfólio completo de serviços de TI para impulsionar 
              sua empresa com as melhores práticas e tecnologias do mercado.
            </p>
          </div>
  
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              
              return (
                <Card 
                  key={service.title}
                  className="group hover:shadow-xl transition-all duration-500 border-gray-200 hover:border-blue-300 bg-white/80 backdrop-blur-sm hover:scale-105"
                >
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    {/* Icon */}
                    <div className="w-20 h-20 mx-auto mb-6 relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl opacity-10 group-hover:opacity-20 transition-all duration-500`}></div>
                      <div className="relative w-full h-full bg-white rounded-3xl flex items-center justify-center border border-gray-200 group-hover:border-blue-300 transition-all duration-500">
                        <Icon className="w-10 h-10 text-gray-600 group-hover:text-blue-500 transition-all duration-500" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {service.description}
                    </p>
  
                    {/* Bottom accent */}
                    <div className={`mt-6 h-1 w-0 bg-gradient-to-r ${service.color} group-hover:w-full transition-all duration-500 mx-auto rounded-full`}></div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
  
          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-200 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Não encontrou o que procura?
              </h3>
              <p className="text-gray-600 mb-6">
                Oferecemos soluções personalizadas para atender às necessidades específicas do seu negócio.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;