import { Mail, MessageCircle, MapPin, Send, Clock, Phone } from "lucide-react";
import { Card, CardContent } from "./ui/cards";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contato@yggdragroup.com",
      link: "mailto:contato@yggdragroup.com",
      description: "Envie sua mensagem detalhada",
      color: "from-blue-500 to-cyan-500",
      responseTime: "Resposta em até 1h"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "(91) 996374963",
      link: "https://wa.me/5591996374963",
      description: "Chat direto e instantâneo",
      color: "from-green-500 to-emerald-500",
      responseTime: "Resposta imediata"
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "Belém, Pará - Brasil",
      link: "https://maps.google.com/?q=Belém,+Pará,+Brasil",
      description: "Atendimento presencial",
      color: "from-purple-500 to-pink-500",
      responseTime: "Agendamento flexível"
    }
  ];

  const handleContactClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-400/10 to-purple-500/10 text-blue-400 text-sm font-medium rounded-full border border-blue-400/20 mb-6">
              <Phone className="w-4 h-4 mr-2" />
              Fale Conosco
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Entre em{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                Contato
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Pronto para transformar sua infraestrutura de TI? Entre em contato conosco 
              e descubra como podemos ajudar seu negócio a crescer com soluções inovadoras.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              
              return (
                <Card 
                  key={info.title}
                  className="group cursor-pointer transition-all duration-700 border-slate-700 hover:border-blue-400/50 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-800/90 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/20"
                  onClick={() => handleContactClick(info.link)}
                >
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    {/* Background gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                    
                    {/* Icon Container */}
                    <div className="w-20 h-20 mx-auto mb-6 relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${info.color} rounded-3xl opacity-20 group-hover:opacity-40 transition-all duration-700`}></div>
                      <div className="relative w-full h-full bg-slate-900 rounded-3xl flex items-center justify-center border border-slate-600 group-hover:border-blue-400/50 transition-all duration-700">
                        <Icon className="w-10 h-10 text-slate-300 group-hover:text-blue-400 transition-all duration-700" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-500">
                        {info.title}
                      </h3>
                      
                      <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-500 text-sm">
                        {info.description}
                      </p>
                      
                      <p className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors duration-500">
                        {info.content}
                      </p>
                      
                      {/* Response time badge */}
                      <div className="inline-flex items-center px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-400 group-hover:bg-blue-400/20 group-hover:text-blue-400 transition-all duration-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {info.responseTime}
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${info.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center`}></div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action Section */}
          <div className="text-center">
            {/* Quick response badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-400/30 mb-8">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-ping"></div>
              <span className="text-green-400 font-medium text-lg">
                ⚡ Equipe online - Resposta garantida em minutos
              </span>
            </div>
            
            {/* Additional info */}
            <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Nossa equipe especializada está pronta para atender você e discutir como podemos 
                impulsionar seu negócio com as melhores soluções tecnológicas do mercado.
              </p>
              
              {/* Features grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-blue-400 font-bold text-xl">24/7</div>
                  <div className="text-slate-400 text-sm">Suporte Disponível</div>
                </div>
                <div className="space-y-2">
                  <div className="text-blue-400 font-bold text-xl">5min</div>
                  <div className="text-slate-400 text-sm">Tempo de Resposta</div>
                </div>
                <div className="space-y-2">
                  <div className="text-blue-400 font-bold text-xl">100%</div>
                  <div className="text-slate-400 text-sm">Consultoria Gratuita</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;