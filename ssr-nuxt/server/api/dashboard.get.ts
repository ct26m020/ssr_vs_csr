// Live-Kennzahlen für das (private) Dashboard – ändern sich bei jedem Aufruf.
export default defineEventHandler(async () => {
  await sleep(300)
  return {
    visitorsOnline: 40 + Math.floor(Math.random() * 20),
    ordersToday: 120 + Math.floor(Math.random() * 10),
    revenueToday: Math.round(4800 + Math.random() * 500),
    updatedAt: new Date().toISOString()
  }
})
