import { ReactElement, useEffect, useState } from 'react';

import MuiChip from '@material-ui/core/Chip';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { clsx } from 'clsx';

import useStyles from './styles';
import { ChipProps, ChipType } from './types';

export const Chip = ({
  type = ChipType.Action,
  selected = false,
  value,
  onSelect,
  avatar,
  size = 'medium',
  onClick,
  variant,
  maintainInternalSelectedState = true,
  ...rest
}: ChipProps): ReactElement => {
  const baseClasses = useStyles();
  const [isSelected, setSelected] = useState(selected);
  const renderCheckmark = () => {
    if (isSelected) {
      return (
        <>
          {size === 'medium' ? (
            <CheckCircleIcon classes={{ root: baseClasses.checkIcon }} />
          ) : (
            <CheckCircleIcon
              classes={{
                root: clsx(
                  baseClasses.checkIcon,
                  baseClasses.smallCheckIcon,
                  variant === 'outlined' && baseClasses.smallCheckIconOutlined
                ),
              }}
            />
          )}
        </>
      );
    }

    return undefined;
  };

  const handleClick = (bool: boolean) => {
    if (maintainInternalSelectedState) {
      setSelected(!bool);
    }
  };

  useEffect(() => {
    if (!maintainInternalSelectedState) {
      setSelected(selected);
    }
  }, [selected, maintainInternalSelectedState]);

  useEffect(() => {
    if (onSelect) {
      onSelect(value, isSelected);
    }
  }, [isSelected, onSelect, value]);

  return (
    <MuiChip
      {...rest}
      onClick={(event) => {
        onClick && onClick(event);
        type === ChipType.Filter && handleClick(isSelected);
      }}
      size={size}
      variant={variant}
      avatar={
        type === ChipType.Filter ? (!isSelected ? avatar : undefined) : avatar
      }
      icon={
        type === ChipType.Filter && isSelected ? renderCheckmark() : undefined
      }
      classes={
        type === ChipType.Filter
          ? {
              root: clsx(isSelected && baseClasses.selectedBg),
              outlined: clsx(
                !isSelected
                  ? baseClasses.outlinedBorder
                  : baseClasses.outlinedBorderPressed,
                !isSelected && baseClasses.outlinedContainer
              ),
              label: clsx(
                baseClasses.label,
                isSelected && !avatar && baseClasses.selectedLabel,
                isSelected &&
                  avatar &&
                  clsx(
                    baseClasses.selectedLabel,
                    size === 'medium'
                      ? clsx(
                          variant === 'default'
                            ? baseClasses.labelPaddingAvatar
                            : baseClasses.labelPaddingAvatarSmall
                        )
                      : clsx(
                          variant === 'default'
                            ? baseClasses.labelPaddingAvatarSmall
                            : baseClasses.labelPaddingOutlinedSmall
                        )
                  )
              ),
              labelSmall: clsx(
                baseClasses.label,
                isSelected && baseClasses.selectedLabel
              ),
            }
          : {
              label: baseClasses.label,
              labelSmall: baseClasses.label,
              outlined: clsx(
                baseClasses.outlinedContainer,
                baseClasses.outlinedBorder
              ),
            }
      }
    />
  ) as ReactElement;
};

export * from './types';
