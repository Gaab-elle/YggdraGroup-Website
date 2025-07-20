import { Card, CardContent } from "./ui/Card";
import { Users, Target, Lightbulb, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Transformar desafios tecnológicos em oportunidades de crescimento",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Equipe",
      description: "Profissionais altamente qualificados e experientes",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Soluções modernas e tecnologias de ponta",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Foco na satisfação e sucesso do cliente",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Content */}
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 text-sm font-medium rounded-full border border-blue-200 mb-4">
                  Sobre Nós
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Sobre a{" "}
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                    Yggdra Group
                  </span>
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg font-medium text-gray-700">
                  A Yggdra Group é uma empresa de tecnologia dedicada a fornecer 
                  soluções completas e inovadoras para empresas de todos os tamanhos. 
                  Nossa missão é transformar desafios tecnológicos em oportunidades de crescimento.
                </p>
                
                <p>
                  Com uma equipe altamente qualificada e experiente, oferecemos desde 
                  o desenvolvimento de sistemas personalizados até a manutenção completa 
                  de infraestrutura de TI, sempre com foco na excelência e satisfação do cliente.
                </p>
                
                <p>
                  Acreditamos que a tecnologia deve ser um facilitador para o seu negócio, 
                  não um obstáculo. Por isso, trabalhamos próximos aos nossos clientes para 
                  entender suas necessidades e entregar soluções que realmente fazem a diferença.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card 
                    key={value.title}
                    className="group hover:shadow-xl transition-all duration-500 border-gray-200 hover:border-blue-300 bg-white/80 backdrop-blur-sm hover:scale-105"
                  >
                    <CardContent className="p-6 text-center">
                      {/* Icon */}
                      <div className="w-16 h-16 mx-auto mb-4 relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl opacity-10 group-hover:opacity-20 transition-all duration-300`}></div>
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Icon className="w-8 h-8 text-gray-600 group-hover:text-blue-500 transition-all duration-300" />
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {value.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {value.description}
                      </p>

                      {/* Bottom accent */}
                      <div className={`mt-4 h-1 w-0 bg-gradient-to-r ${value.gradient} group-hover:w-full transition-all duration-500 mx-auto rounded-full`}></div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Company Image/Placeholder */}
          <div className="text-center">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-blue-200">
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-6xl">🚀</span>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Pronto para Crescer?
              </h3>
              
              <p className="text-xl text-gray-600 mb-8">
                Vamos transformar sua visão em realidade com as melhores soluções tecnológicas do mercado.
              </p>
              
              <button 
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Começar Agora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;