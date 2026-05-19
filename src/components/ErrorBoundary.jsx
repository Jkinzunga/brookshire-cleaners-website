import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{
          minHeight: '100vh', display: 'flex', alignItems: 'center',
          justifyContent: 'center', background: '#F7F4EF',
          fontFamily: 'Inter,system-ui,sans-serif', padding: '2rem', textAlign: 'center',
        }}>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#1C1C1E', marginBottom: '.5rem' }}>
              Something went wrong.
            </div>
            <p style={{ color: '#7A7570', marginBottom: '1.5rem' }}>
              Please refresh the page or call us at (704) 393-0088.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                background: '#4A7C6F', color: '#fff', border: 'none',
                borderRadius: '999px', padding: '.75rem 2rem',
                cursor: 'pointer', fontSize: '.9rem',
              }}
            >
              Refresh page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
