import React from 'react';
import {Modal} from "@shopify/app-bridge-react";
import {Modal as PolarisModal, TextContainer} from "@shopify/polaris";

type Props = {
  toggleActive: Function,
  criticalActive?: boolean,
  criticalText?: string,
  criticalChildren?: React.ReactNode,
  warningActive?: boolean,
  warningText?: string,
  warningChildren?: React.ReactNode,
  successActive?: boolean,
  successText?: string,
  successChildren?: React.ReactNode,
}

export default class FeedbackBanners extends React.Component<Props> {
  render() {
    const {
      toggleActive,
      criticalActive, criticalText, criticalChildren,
      warningActive, warningText, warningChildren,
      successActive, successText, successChildren,
    } = this.props;

    return (
      <div>
        {
          criticalActive && <Modal
            open={criticalActive}
            onClose={() => toggleActive('critical')}
            title={"Oh no!"}
            message={criticalText}
            primaryAction={{
              content: 'Okay',
              onAction: toggleActive('critical'),
            }}>
            <PolarisModal.Section>
              <TextContainer>
                <p>
                  {(!!criticalChildren && criticalChildren)}
                </p>
              </TextContainer>
            </PolarisModal.Section>
          </Modal>
        }
        {
          warningActive && <Modal
            open={warningActive}
            onClose={() => toggleActive('warning')}
            title={"Warning!"}
            message={warningText}
            primaryAction={{
              content: 'Okay',
              onAction: toggleActive('warning'),
            }}>
            <PolarisModal.Section>
              <TextContainer>
                <p>
                  {(!!warningChildren && warningChildren)}
                </p>
              </TextContainer>
            </PolarisModal.Section>
          </Modal>
        }
        {
          successActive && <Modal
            open={successActive}
            onClose={() => toggleActive('success')}
            title={"Success."}
            message={successText}
            primaryAction={{
              content: 'Okay',
              onAction: toggleActive('success'),
            }}>
            <PolarisModal.Section>
              <TextContainer>
                <p>
                  {(!!successChildren && successChildren)}
                </p>
              </TextContainer>
            </PolarisModal.Section>
          </Modal>
        }
      </div>
    );
  }
}
