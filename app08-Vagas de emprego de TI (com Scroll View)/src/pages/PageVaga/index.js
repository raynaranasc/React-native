import { View, Text, ScrollView } from 'react-native'
import {styles} from './styles'
import Vaga from '../../components/Vagas'

function Vagas(){
  return(
    <ScrollView >
      <View style={styles.tela}>

      <Text style={styles.titulo}>Vagas de T.I</Text>
  
          
          <Vaga titulo='Analista de Suporte Técnico' salario='R$ 3.200,00' descricao='Suporte técnico presencial e remoto aos usuários, diagnóstico e   resolução de problemas em hardware e software, instalação e configuração de sistemas operacionais e aplicativos.' contato='ana@email.com'/>

          <Vaga titulo='Desenvolvedor Java' salario='R$ 4.500,00' descricao='Desenvolvimento e manutenção de sistemas Java, análise de requisitos, codificação, testes e documentação. Experiência com frameworks como Spring é um diferencial.' contato=' joao@email.com'/>

          <Vaga titulo='Designer Gráfico' salario='R$ 3.800,00' descricao='Criação de peças gráficas para mídias digitais e impressas, como banners, flyers e layouts para redes sociais. Domínio de ferramentas como Adobe Photoshop e Illustrator.' contato=' Carla@email.com'/>

          <Vaga titulo='Analista de Recursos Humanos' salario='R$ 4.000,00' descricao='Recrutamento e seleção, integração de novos colaboradores, administração de benefícios, acompanhamento de avaliação de desempenho e suporte em questões trabalhistas.' contato=' lucas@email.com'/>

          <Vaga titulo='Administrador de Redes' salario='R$ 5.000,00' descricao='Administração e monitoramento de redes, configuração de roteadores e switches, suporte técnico em redes de dados e voz, implementação de políticas de segurança.' contato='fernanda@email.com'/>
          
          <Vaga titulo='Analista Financeiro' salario='R$ 4.200,00' descricao='Análise de demonstrativos financeiros, elaboração de relatórios gerenciais, controle de contas a pagar e a receber, conciliação bancária e apoio em processos de auditoria.' contato='Gabriel - (61) 98765-4321 ou gabriel@email.com'/>
          <Vaga titulo='Assistente Administrativo' salario='R$ 2.800,00' descricao='Rotinas administrativas como controle de documentos, atendimento telefônico, organização de agenda, apoio em eventos e demais atividades administrativas.' contato='mariana@email.com'/>

<Vaga titulo='Analista de Marketing' salario='R$ 3.500,00' descricao='Criação de conteúdo para redes sociais, análise de métricas de campanhas, suporte em estratégias de marketing digital, acompanhamento de resultados e identificação de oportunidades de melhorias.' contato='pedro@email.com'/>

<Vaga titulo='Analista de Qualidade' salario='R$ 3.600,00' descricao='Realização de testes de software, elaboração e execução de casos de teste, identificação e registro de defeitos, suporte em garantia de qualidade de software.' contato='rafaela@email.com'/>

<Vaga titulo='Assistente de Logística' salario='R$ 3.000,00' descricao='Controle de estoque, recebimento e expedição de materiais, elaboração de relatórios de movimentação, suporte na organização e distribuição de produtos.' contato='Sandra@email.com'/>


       
    </View>
     </ScrollView>
  )
}

export default Vagas