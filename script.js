function atualizarContador() {
  const fim = new Date('2025-07-01T00:00:00');
  const agora = new Date();
  const diff = fim - agora;

  if (diff <= 0) {
    document.getElementById('countdown').textContent = 'Chegou a hora!';
    clearInterval(intervalo);
    return;
  }

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById('countdown').textContent =
    `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

const intervalo = setInterval(atualizarContador, 1000);
atualizarContador();
