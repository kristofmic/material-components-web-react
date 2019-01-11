// The MIT License
//
// Copyright (c) 2019 Google, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
import * as React from 'react';
import * as classnames from 'classnames';
import {cssClasses} from './constants';
import Button from '@material/react-button';


export interface DialogButtonProps extends React.HTMLProps<HTMLElement>{
  action: string,
  className?: string,
  isDefault?: boolean,
};


export const DialogButton: React.FunctionComponent<DialogButtonProps> = ({
  action, className = '', children, isDefault = false, ...otherProps
}) => (
  // @ts-ignore  https://github.com/Microsoft/TypeScript/issues/28892
  <Button
    className={classnames(className, cssClasses.BUTTON, {
      [cssClasses.DEFAULT_BUTTON]: isDefault})}
    data-mdc-dialog-action={action}
    {...otherProps}
  >{children}</Button>
);

DialogButton.displayName = 'DialogButton';
export default DialogButton;