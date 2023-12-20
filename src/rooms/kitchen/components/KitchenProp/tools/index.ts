import { PIXEL } from '../../../../../utils';
import { KitchenModelProps } from '../types';
import { KITCHEN_DIMS } from '../utils';

/**
 * The function `getMatrixFromProps` calculates the X, Y, and Z coordinates of a kitchen model based on
 * the provided props.
 * @param {KitchenModelProps} props - The `props` parameter is an object that contains the following
 * properties:
 * @returns The function `getMatrixFromProps` returns an object with three properties: `MatrixX`,
 * `MatrixY`, and `MatrixZ`.
 */
export const getMatrixFromProps = (props: KitchenModelProps) => {
  const { x = 0, y = 0, z = 0, above } = props;
  const matrix = [+x, +y, +z];
  const MatrixX = matrix[0] * PIXEL;

  const MatrixY =
    (above
      ? above?.map((a) => KITCHEN_DIMS[a].y).reduce((a, b) => a + b, 0) ?? 0
      : matrix[1]) * PIXEL;
  const MatrixZ = matrix[2] * PIXEL;

  return {
    MatrixX,
    MatrixY,
    MatrixZ,
  };
};
