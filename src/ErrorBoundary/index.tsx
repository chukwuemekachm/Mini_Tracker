import * as React from 'react';
import * as Sentry from '@sentry/browser';

const {
  SENTRY_DNS
} = process.env;

Sentry.init({
  dsn: SENTRY_DNS,
});

interface ErrorBoundaryState {
  hasError: boolean;
  eventId: any;
}

export class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  constructor(props) {
    super(props);
    this.state = { eventId: null, hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope(scope => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (!hasError) return children;
    return (
      <button onClick={() => Sentry.showReportDialog({ eventId: this.state.eventId })}>Report feedback</button>
    );
  }
}
