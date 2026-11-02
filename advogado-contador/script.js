(function(){
  var dados=[
    {n:"Trabalhista",t:"Direito do trabalho",d:"Orientação para quem foi demitido, tem verbas em atraso ou precisa regularizar a relação com funcionários.",l:["Carteira de trabalho","Contracheques e contrato","Termo de rescisão, se houver","Conversas ou e-mails relevantes"]},
    {n:"Família",t:"Direito de família",d:"Divórcio, pensão alimentícia, guarda e inventário conduzidos com cuidado e, sempre que possível, por acordo.",l:["Certidões de casamento ou nascimento","Documentos pessoais das partes","Lista de bens, se for o caso","Comprovantes de renda"]},
    {n:"Abrir empresa",t:"Abertura de empresa (MEI, ME, Ltda.)",d:"Escolha do enquadramento correto, registro e organização fiscal desde o primeiro mês.",l:["Documentos pessoais dos sócios","Comprovante de endereço","Descrição da atividade","Estimativa de faturamento mensal"]},
    {n:"Impostos",t:"Contabilidade e impostos",d:"Fechamento mensal, notas fiscais, folha de pagamento e planejamento para pagar o que é devido, sem excesso.",l:["Notas fiscais emitidas e recebidas","Extratos bancários","Guias de impostos pagas","Dados de funcionários, se houver"]},
    {n:"Imposto de renda",t:"Imposto de renda pessoa física",d:"Declaração conferida e entregue no prazo, inclusive regularização de pendências e malha fina.",l:["Informe de rendimentos","Recibos de saúde e educação","Dados de bens e dívidas","Declaração do ano anterior"]}
  ];
  var abas=document.getElementById("abas"),painel=document.getElementById("painel");
  function mostrar(i){
    var x=dados[i];
    [].forEach.call(abas.children,function(b,j){b.setAttribute("aria-selected",j===i?"true":"false");});
    painel.innerHTML='<span class="tag">'+(i>=2?"Contábil":"Jurídico")+(i===2?" e contábil":"")+'</span><h3>'+x.t+'</h3><p>'+x.d+'</p><h4>O que levar na primeira conversa</h4><ul>'+x.l.map(function(e){return "<li>"+e+"</li>";}).join("")+'</ul><a class="btn escuro" href="https://wa.me/5511999999999?text='+encodeURIComponent("Olá, preciso de ajuda com: "+x.n)+'" target="_blank" rel="noopener">Falar sobre este caso</a>';
  }
  dados.forEach(function(x,i){
    var b=document.createElement("button");b.type="button";b.setAttribute("role","tab");b.textContent=x.n;
    b.addEventListener("click",function(){mostrar(i);});abas.appendChild(b);
  });
  mostrar(0);
})();
 