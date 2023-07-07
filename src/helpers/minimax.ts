const minimax = (totalMatches: number, m: number, isMaximizingPlayer: boolean, alpha: number, beta: number): number => {
    if (totalMatches <= m) {
      return isMaximizingPlayer ? 1 : -1;
    }

    if (isMaximizingPlayer) {
      let bestMoveValue = -Infinity;
      for (let i = 1; i <= m; i++) {
        const newTotalMatches = totalMatches - i;
        const moveValue = minimax(newTotalMatches, m, false, alpha, beta);
        bestMoveValue = Math.max(bestMoveValue, moveValue);
        alpha = Math.max(alpha, moveValue);
        if (beta <= alpha) {
          break; // Произошло отсечение
        }
      }
      return bestMoveValue;
    } else {
      let bestMoveValue = Infinity;
      for (let i = 1; i <= m; i++) {
        const newTotalMatches = totalMatches - i;
        const moveValue = minimax(newTotalMatches, m, true, alpha, beta);
        bestMoveValue = Math.min(bestMoveValue, moveValue);
        beta = Math.min(beta, moveValue);
        if (beta <= alpha) {
          break; // Произошло отсечение
        }
      }
      return bestMoveValue;
    }
};
export default minimax