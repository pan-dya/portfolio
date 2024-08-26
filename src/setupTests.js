// setupTests.js
class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe() {
    // Mock implementation: You can add any additional logic if needed
  }

  unobserve() {
    // Mock implementation
  }

  disconnect() {
    // Mock implementation
  }
}

global.IntersectionObserver = IntersectionObserver;
