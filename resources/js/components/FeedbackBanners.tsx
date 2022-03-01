import React from 'react';
import {Modal} from '@shopify/app-bridge-react';
import {Modal as PolarisModal, TextContainer} from '@shopify/polaris';

export enum AlertLevel {
  Critical = 'critical',
  Warning = 'warning',
  Success = 'success',
}

export type ActiveProps = {
  criticalActive: boolean;
  warningActive: boolean;
  successActive: boolean;
};

export type TextProps = {
  criticalText?: string;
  warningText?: string;
  successText?: string;
};

export type ChildrenProps = {
  criticalChildren?: React.ReactNode;
  warningChildren?: React.ReactNode;
  successChildren?: React.ReactNode;
};

export type Props = {toggleActive: (level: AlertLevel) => () => void} & ActiveProps & TextProps & ChildrenProps;

const FeedbackBanners = (props: Props): JSX.Element => {
  return (
    <div>
      {props.criticalActive && (
        <Modal
          open={props.criticalActive}
          onClose={() => props.toggleActive(AlertLevel.Critical)}
          title={'Oh no!'}
          message={props.criticalText}
          primaryAction={{
            content: 'Okay',
            onAction: props.toggleActive(AlertLevel.Critical),
          }}
        >
          <PolarisModal.Section>
            <TextContainer>
              <p>{!!props.criticalChildren && props.criticalChildren}</p>
            </TextContainer>
          </PolarisModal.Section>
        </Modal>
      )}
      {props.warningActive && (
        <Modal
          open={props.warningActive}
          onClose={() => props.toggleActive(AlertLevel.Warning)}
          title={'Warning!'}
          message={props.warningText}
          primaryAction={{
            content: 'Okay',
            onAction: props.toggleActive(AlertLevel.Warning),
          }}
        >
          <PolarisModal.Section>
            <TextContainer>
              <p>{!!props.warningChildren && props.warningChildren}</p>
            </TextContainer>
          </PolarisModal.Section>
        </Modal>
      )}
      {props.successActive && (
        <Modal
          open={props.successActive}
          onClose={() => props.toggleActive(AlertLevel.Success)}
          title={'Success.'}
          message={props.successText}
          primaryAction={{
            content: 'Okay',
            onAction: props.toggleActive(AlertLevel.Success),
          }}
        >
          <PolarisModal.Section>
            <TextContainer>
              <p>{!!props.successChildren && props.successChildren}</p>
            </TextContainer>
          </PolarisModal.Section>
        </Modal>
      )}
    </div>
  );
};

export default FeedbackBanners;
